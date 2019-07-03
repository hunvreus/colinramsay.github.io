Create a Dockerfile:

```
FROM ruby:2.6

WORKDIR /app

COPY Gemfile ./
RUN bundle install

COPY . /app
```

A handy Makefile:

```
PREFIX = docker run -v "$(shell pwd)":/app --rm --name appname imagename

build:
	docker build -t imagename .

test: build
	$(PREFIX) bundle exec rspec spec
```

Create a Gemfile and add some gems to it:

```
bundle init
bundle add rspec
```

And you can now create the following directory structure in your local folder

```
lib/my_class.rb
spec/my_class_spec.rb
```

Write some specs and run them with:

```
make test
```

Huzzah!
