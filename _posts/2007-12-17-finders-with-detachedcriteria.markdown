---
layout: post
status: publish
published: true
title: Finders with DetachedCriteria
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 406
wordpress_url: http://colinramsay.co.uk/2007/12/17/finders-with-detachedcriteria/
date: !binary |-
  MjAwNy0xMi0xNyAwMzo1Nzo1NSArMDAwMA==
date_gmt: !binary |-
  MjAwNy0xMi0xNyAwMjo1Nzo1NSArMDAwMA==
categories:
- .NET
- C#
- Patterns
- Castle
- Active Record
tags: []
comments:
- id: 9088
  author: BenL
  author_email: benjamin.lovell@gmail.com
  author_url: http://benl.wordpress.com
  date: !binary |-
    MjAwNy0xMi0xNyAxMjo1Mjo0OSArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0xNyAxMTo1Mjo0OSArMDAwMA==
  content: ! "I use something very similar and inspired by the StoryVerse project.
    The plus side of this approach when using Monorail is that you can also bind the
    query parameters from your forms using the BinderAttribute. Very neat approach.\r\n\r\nAs
    for the pattern I guess its a kind-of QueryObject:\r\n\r\nhttp://martinfowler.com/eaaCatalog/queryObject.html"
---
<p>I should file this under "things that are probably a design pattern but I'm not sure exactly what kind"; it seems like one of those typical things that you will naturally stumble upon when using the Repository pattern and indeed when you start to separate out your query logic.</p>
<p>DetachedCriteria is an "offline" version of the NHibernate Criteria class, used to build up Criteria where an NHibernate Session is not available. The NHibernate documentation has more on <a href="http://www.hibernate.org/hib_docs/nhibernate/1.2/reference/en/html/querycriteria.html">how to use DetachedCriteria</a> on its own, but I want to talk about inheriting from it to create a simple custom finder class.</p>
<p>Say we have a Active Record Person class, with height and weight properties:</p>
<pre><code>[ActiveRecord]
public class Person : ActiveRecordBase<Person>
{
    [PrimaryKey]
    public int Id { get; set; }
    [Property]
    public int Height { get; set; }
    [Property]
    public int Weight { get; set; }
}</code></pre>
<p>The height and weight properties are simplified, and I'm using C# 3.0 automatic properties for clarity. I want to search for a Person based on their height and weight, so to do so, I'll create a new finder class:</p>
<pre><code>public class PersonFinder : DetachedCriteria
{
    public class PersonFinder(height, weight) : base(typeof(Person))
    {
         Add(Expression.Eq("Height", height));
         Add(Expression.Eq("Weight", weight));
    }
}</code></pre>
<p>A simple class, but it clearly states its purpose. Here's how it could be used:</p>
<pre><code>Person.FindAll(new PersonFinder(200, 300), new Order("Id", true));</code></pre>
<p>For me, the advantage of this code isn't just in reducing what you have to type. Instead it is in the readability and discoverability of the code.</p>
