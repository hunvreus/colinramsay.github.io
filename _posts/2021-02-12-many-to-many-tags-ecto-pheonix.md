---
layout: post
title: Many-To-Many Tags or Categories With Elixir & Phoenix
published: true
---

I want to allow "questions" to have multiple "categories". We need a join table for that, so let's generate a migration:

```
mix ecto.gen.migration add_questions_to_categories
```

Then in our new migration:

```
defmodule Quizzical.Repo.Migrations.AddQuestionsToCategories do
  use Ecto.Migration

  def change do
    create table(:questions_categories, primary_key: false) do
      add :question_id, references(:questions, on_delete: :delete_all)
      add :category_id, references(:categories, on_delete: :delete_all)
    end
  end
end
```

We're using [references](https://hexdocs.pm/ecto_sql/Ecto.Migration.html#references/2) to create foreign keys and enforce deletion of join records at the database level. Then, in our pre-existing "question" schema we use the many_to_many macro:

```
many_to_many :categories, Category, join_through: "questions_categories"
```

And likewise in our "category" schema:

```
many_to_many :questions, Question, join_through: "questions_categories"
```

The documentation on [many_to_many](https://hexdocs.pm/ecto/Ecto.Schema.html#many_to_many/3) goes into more detail but we're only specifying the name of our join table and the schema representing the "other side" of the join.

When we create or update a question, the parameters coming in from the UI are going to look like this:

```
%{
    "answer" => "Because",
    "categories" => ["1", "Film", "Art"],
    "question" => "Why"
}
```

We're going to make the assumption that if one of the items in the "categories" array is an integer then that's a category ID. If it's a string, then it's a new category we need to create and we'll use the string as its name. Let's try that using `iex`.

```
$ iex -S mix
$ %Question{} |> Question.changeset(%{ question: "Why", answer: "Cos", categories: ["that", "this"] })
#Ecto.Changeset<
  action: nil,
  changes: %{answer: "Cos", question: "Why"},
  errors: [],
  data: #Quizzical.Questions.Question<>,
  valid?: true
>
```

While I'd already set up the changeset to accept the question and answer fields, it now needs to accept categories too. We'll use `put_assoc/3` for that, passing the `categories` from the UI params to a function called `insert_and_get_all_categories/1`:

```
def changeset(question, attrs) do
  categories = attrs["categories"] || []

  question
  |> cast(attrs, [:question, :answer])
  |> validate_required([:question, :answer])
  |> Ecto.Changeset.put_assoc(:categories, insert_and_get_all_categories(categories))
end
```

Then `insert_and_get_all_categories/1` looks like this:

```
 defp insert_and_get_all_categories(names) do
    # Convert the array of category names into an array of { name: "name" } maps
    maps = Enum.map(names, &%{name: &1})
    
    # Insert all of those categories into the database, if theres's a naming conflict
    # just ignore it. That means we can insert all the categories each time and not care about duplicates.
    Repo.insert_all(Category, maps, on_conflict: :nothing)
    
    # Now return full categories objects matching the passed-in names, because `put_assoc` expects
    # category objects.
    Repo.all(from c in Category, where: c.name in ^names)
  end
```

For this to work, you need to have a unique index on category name, so if you don't, create a new migration:

```
defmodule Quizzical.Repo.Migrations.AddUniqueCategoryNameIndex do
  use Ecto.Migration

  def change do
    create unique_index(:categories, [:name])
  end
end
```

And finally, we need to let Ecto know what to do when a category on a question is being "replaced". "Replaced is described by the [documentation](https://hexdocs.pm/ecto/Ecto.Changeset.html#module-the-on_replace-option):


> When using any of those APIs, you may run into situations where Ecto sees data is being replaced. For example, imagine a Post has many Comments where the comments have IDs 1, 2 and 3. If you call `cast_assoc/3` passing only the IDs 1 and 2, Ecto will consider 3 is being "replaced" and it will raise by default. 

Great, so when we're "replacing" a category we're actually deliberately not passing one from the UI, which means we want to remove it from the question. To do that we just specify the `on_replace` option in the question schema:

```
many_to_many :categories, Category, join_through: "questions_categories", on_replace: :delete
```

Done! The majority of this comes from José Valim's [post on many-to-many](https://blog.plataformatec.com.br/2016/12/many-to-many-and-upserts/).
