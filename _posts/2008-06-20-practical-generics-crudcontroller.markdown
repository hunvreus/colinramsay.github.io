---
layout: post
status: publish
published: true
title: ! 'Practical Generics: CrudController'
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 442
wordpress_url: http://colinramsay.co.uk/?p=442
date: !binary |-
  MjAwOC0wNi0yMCAxODo0ODoxMSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNi0yMCAxNzo0ODoxMSArMDEwMA==
categories:
- .NET
- C#
- Snippet
- Patterns
- NHibernate
- Development
tags: []
comments:
- id: 20912
  author: Sean Chambers
  author_email: dkode8@gmail.com
  author_url: http://schambers.lostechies.com
  date: !binary |-
    MjAwOC0wNi0yMCAyMzowOTozNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0yMCAyMjowOTozNCArMDEwMA==
  content: ! "What I do is make the Specification criteria stand on its own. With
    just setters and a ToDetachedCriteria() method. I then pass the entire specification
    to my repository.Find method. within the Repository.Find I simply call the ToDetachedCriteria
    method and pass it to nhibernate.\r\n\r\nEither way will work, I just prefer to
    remove the responsibility of calling the repository from the spcification and
    rather use the specication as simply a transport mechanism for criteria.\r\n\r\nYour
    way will work fine though! Good post!"
- id: 20919
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wNi0yMSAxMTo0MTo1MiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0yMSAxMDo0MTo1MiArMDEwMA==
  content: That's a good point actually Sean, your method would fit in with the Finder
    classes which I sometimes write. Time for some refactoring!
- id: 21295
  author: efdee
  author_email: filip@duyck.org
  author_url: http://www.filip.duyck.org
  date: !binary |-
    MjAwOC0wNy0wNyAxMDozNzoyNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wNyAwOTozNzoyNCArMDEwMA==
  content: Seems very similar to what I do in one of my recent projects. Small note,
    I think some of the generics-specific parts of your code in this post get lost
    in the HTML due to lack of &gt; and &lt; conversions.
- id: 21315
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wNy0wOCAxMzoxMTo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wOCAxMjoxMTo1NyArMDEwMA==
  content: ! '@efdee: thanks for noticing that, I''ve fixed it now.'
- id: 21758
  author: VokSlannilully
  author_email: sweet0608@ua.fm
  author_url: http://www.answerbag.com/profile/?id=444391
  date: !binary |-
    MjAwOC0wOC0wMyAxNjoyOTo0MiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0wMyAxNToyOTo0MiArMDEwMA==
  content: Thanks !
---
<p>In my last post I discussed code reuse in the form of an abstract CrudController class: a means of providing create, read, update and delete actions for a given entity. In addition, that class provided the ability to work with an entity specification class to allow for filtered reads - which is just another name for search results.</p>
<p>I'm going to show C# code samples for building with a class like this, but you'll have to fill in the gaps in terms of how you can work with it. The code to list entities is the most interesting and will demonstrate the concept best, so I'm going to focus on that. To begin with, let's assume a very simple entity:</p>
<pre><code class="csharp">public class Post
{
	public DateTime CreatedOn { get; set; }
	public string Headline { get; set; }
	public string Body { get; set; }
	public string Username { get; set; }
}</code></pre>
<p>So, to begin with we'd like to list Posts. A typical method to do so would be:</p>
<pre><code class="csharp">public void List()
{
    PropertyBag["posts"] = PostRepository.FindAll();
}</code></pre>
<p>But remember that in my case, I'm trying to create a reusable method of doing this, and that I'm also going to be working with ExtJS which is going to consume JSON. So, I have the following class:</p>
<pre><code class="csharp">public abstract class CrudController&lt;Entity&gt;
{
	private IRepository&lt;Entity&gt; _repository;

	public void GetJsonList()
	{
		RenderText(
			JsonHelper.Serialize(_repository.FindAll())
		);
	}
}

public class PostController : CrudController&lt;Post&gt;{}</code></pre>
<p>I need a shell PostController, but most of the action is happening in the CrudController, and I'm using the magic of Windsor and generics to make it happen. By passing Post as a type parameter to CrudController, Windsor will then give me the correct IRepository&lt;T&gt; to work with, and from there it's a simple matter of fetching the list of Post Entities in the same way I did in the previous code sample. I want to get a JSON string back, so I'm passing that list to a helper to serialize to JSON.</p>
<p>The next step is to make this listing method a bit more flexible and a bit more powerful. I want to do a couple of things - paging, sorting, and searching. Here's my new method signature for GetListJson:</p>
<pre><code class="csharp">void GetListJson(int start, int limit, string sort, string dir, EntitySpecification spec)</code></pre>
<p>The arguments "start" and "limit" are for paging, saying which record I should start from and how many I should return. The "sort" argument tells me the column I should sort on, and "dir" gives me the sort direction. But what about EntitySpecification? Let's show it in context:</p>
<pre><code class="csharp">public abstract class CrudController&lt;Entity, EntitySpecification&gt; where EntitySpecification : ISpec
{
	private IRepository&lt;Entity&gt; _repository;

	public void GetJsonList(int start, int limit, string sort, string dir, [DataBind(&quot;spec&quot;)]EntitySpecification spec)
	{
		spec.AddOrder(sort, dir);
		spec.FindAll(_repository, start, limit);
	}
}

public class PostController : CrudController&lt;Post, PostSpecification&gt;{}</code></pre>
<p>As you can see, EntitySpecification is databound by Monorail; incoming parameters are passed to the specification to build up a criteria for querying, as described in Ayende's <a href="http://www.ayende.com/Blog/archive/2007/10/23/Specifying-Specifications.aspx">search specification post</a>. That means that I don't have to explicitly handle searching in my CrudController at all, because it's all handled by the EntitySpecification. A sample PostSpecification could look like this:</p>
<pre><code class="csharp">public class PostSpecification : ISpec
{
	private ICriteria _criteria;
	private string _username;
	
	public virtual string Username
	{
		get { return _username; }
		set {
			_username = value;

			if (value == null)
				return;

			_criteria.Add(
					Expression.Eq(&quot;Username&quot;, value)
				);
		}
	}
	
	public void AddOrder(string sort, string dir)
	{
		var order = (dir == &quot;ASC&quot; ? .Order.Asc(sort) : Order.Desc(sort));

		_criteria.AddOrder(new Order());
	}
	public IList&lt;Post&gt; FindAll(IRepository&lt;Post&gt; repo, int start, int limit)
	{
		repo.Find(_criteria, start, limit);
	}
}</code></pre>
<p>When Monorail runs the databinder, the Username property's getter will be called and the private criteria will be altered. When the specification's FindAll method is called, that criteria is passed through to filter the returned records. </p>
<p>Let me know if you have any improvements or suggestions, and thank you again to Ayende for the specification ideas.</p>
