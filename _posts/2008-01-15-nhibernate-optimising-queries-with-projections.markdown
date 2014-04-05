---
layout: post
status: publish
published: true
title: ! 'NHibernate: Optimising Queries with Projections'
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 410
wordpress_url: http://colinramsay.co.uk/2008/01/15/nhibernate-optimising-queries-with-projections/
date: !binary |-
  MjAwOC0wMS0xNSAxMTo0Mzo1OCArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMS0xNSAxMDo0Mzo1OCArMDAwMA==
categories:
- NHibernate
tags: []
comments:
- id: 12007
  author: efdee
  author_email: filip@duyck.org
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0xNyAxNjoyMDo1MSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0xNyAxNToyMDo1MSArMDAwMA==
  content: Given the sometimes sparse documentation available on NHibernate it's nice
    to see people like you and Ayende putting some effort in blogging about the interesting
    bits. Thanks.
- id: 17495
  author: Brian Chavez
  author_email: bchavez@bitarmory.com
  author_url: http://bchavez.bitarmory.com
  date: !binary |-
    MjAwOC0wMy0zMSAyMjo1MjozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0zMSAyMTo1MjozOCArMDEwMA==
  content: Cool optimization!
- id: 18368
  author: Proyecciones con ActiveRecord / NHibernate &laquo; Blog de Rodrigo Juarez
    sobre TI
  author_email: ''
  author_url: http://rodrigojuarez.com/2008/04/12/proyecciones-con-activerecord/
  date: !binary |-
    MjAwOC0wNC0xMyAwNjowNzowMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xMyAwNTowNzowMSArMDEwMA==
  content: ! '[...] http://colinramsay.co.uk/diary/2008/01/15/nhibernate-optimising-queries-with-projections/
    [...]'
- id: 18883
  author: Blog de Rodrigo Juarez sobre TI &raquo; Blog Archive &raquo; Proyecciones
    con ActiveRecord / NHibernate, creacion de DTO
  author_email: ''
  author_url: http://rodrigojuarez.com.ar/?p=11
  date: !binary |-
    MjAwOC0wNC0yMyAwMDoxNDozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0yMiAyMzoxNDozNyArMDEwMA==
  content: ! '[...] http://colinramsay.co.uk/diary/2008/01/15/nhibernate-optimising-queries-with-projections/
    [...]'
- id: 19751
  author: Akash
  author_email: akash.v@hireproindia.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNS0xNCAwNzo0MzoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0xNCAwNjo0MzoxMCArMDEwMA==
  content: Good One!
- id: 20804
  author: atx
  author_email: none@example.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0xMCAxNDoyMTozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xMCAxMzoyMTozOSArMDEwMA==
  content: ! "I am usually trying to avoid using IDs, as for me it feels like going
    back to relational stuff (IDs everywhere).\r\nCouldn't you just use Projections.Distinct
    on your Category query?"
- id: 21323
  author: aslesh
  author_email: asleshkumar.vejandla@gmail.com
  author_url: http://www.google.com
  date: !binary |-
    MjAwOC0wNy0wOCAyMjoxNDowOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wOCAyMToxNDowOSArMDEwMA==
  content: ! "If you can share the documents that you have about NH that will be a
    gr8 help from your side\r\n\r\nAslesh"
---
<p>As I mentioned previously, I am a only just beginning to get a feel for NHibernate's querying abilities. Yesterday I had a situation where I wanted to retrieve particular records in a table based on values from another table. Here's an example, with names changed to protect the innocent:</p>
<pre><code>Category
--Has Many Posts</code></pre>
<p>I wanted to select all categories where the Post date was within a certain range. Here's what I started with:</p>
<pre><code>DetachedCriteria criteria = DetachedCriteria.For(typeof (Category))
	.CreateCriteria("Posts")
	.Add(Expression.Between("PostDate", startDate, endDate));</code></pre>
<p>The Category object has a collection property on it called Posts, so when I CreateCriteria("Posts"), I am effectively telling NH I want to drill down through that property and begin filtering on the properties of Post, which is what I do with the next line.</p>
<p>This was pretty straightforward, once I'd thought it through. However, running the query gave me hundreds of matches instead of the few I knew I should be getting. A bit of digging showed me that this was because (in SQL terms) this wasn't running a DISTINCT query, so I was getting a Category back for every matching Post. After a quick Google search, I found out how to replicate the DISTINCT keyword that I thought I was after:</p>
<pre><code>DetachedCriteria criteria = DetachedCriteria.For(typeof (Category))
	.CreateCriteria("Posts")
	.Add(Expression.Between("PostDate", startDate, endDate))
        .SetResultTransformer(new NHibernate.Transform.DistinctRootEntityResultTransformer());</code></pre>
<p>I tell NH to run a DISTINCT on the root entity, in this case Category, and hey presto, I get the number of records I was expecting. I sat down to test this out a little bit more and think about the solution in my head. It started getting a bit slow when I increased the date range, so I fired up SQL Server Profiler to see what was happening under the hood.</p>
<p>What I saw made lots of sense. It was pulling back all of the duplicate records I saw before I used the result transformer. It was also pulling back all of the data for the Post entity. The result transformer must work on the client side, so I was pulling back far too much information, and my test run was taking 10 seconds to complete.</p>
<p>There were two clear areas for optimisation here, and they were linked. I didn't need all of the Post data, and it was that which was causing me to get duplicate rows, so I rethought my code:</p>
<pre><code>DetachedCriteria postList = DetachedCriteria.For(typeof(Post))
	.SetProjection(Projections.Property("Category.CategoryUID"))
	.Add(Expression.Between("PostDate", startDate, endDate));

DetachedCriteria criteria = DetachedCriteria.For(typeof (Category))
	.Add(Subqueries.PropertyIn("CategoryUID", postList));</code></pre>
<p>Firstly I create a criteria to get the posts which I need, but with one important difference: SetProjection. In this example, I am saying that I only want to retrieve the CategoryUID on the Category property of Post. In other words, despite this being a Criteria for typeof(Post), I will actually pull back a list of integers representing the CategoryUIDs which match. I am narrowing down the columns which I am returning using Projections.</p>
<p>Secondly, I pass those results to a subquery, which is pretty much like using IN (SELECT) in your WHERE clause in a SQL statement. Using the PropertyIn method took me a while to discover, but when I did it worked like a charm. My test run now takes zero seconds to complete, and I am a happy developer.</p>
