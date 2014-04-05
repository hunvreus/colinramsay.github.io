---
layout: post
status: publish
published: true
title: NHibernate - Querying with Criteria
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 411
wordpress_url: http://colinramsay.co.uk/2008/01/20/nhibernate-querying-with-criteria/
date: !binary |-
  MjAwOC0wMS0yMCAwMToyODoxNCArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMS0yMCAwMDoyODoxNCArMDAwMA==
categories:
- NHibernate
tags: []
comments:
- id: 17965
  author: Paul Burns
  author_email: paul@internetware.co.uk
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0xMCAxMTozMzoyNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xMCAxMDozMzoyNCArMDEwMA==
  content: ! "DetachedCriteria criteria1 = DetachedCriteria.For()\r\n\t.Add(Expression.Eq(â??CategoryIDâ??,
    55));\r\n\r\n:-)"
- id: 17966
  author: Paul Burns
  author_email: paul@internetware.co.uk
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0xMCAxMTozNDoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xMCAxMDozNDoxOCArMDEwMA==
  content: ! "That should read..\r\n\r\nDetachedCriteria criteria1 = DetachedCriteria.For()\r\n\t.Add(Expression.Eq(â??CategoryIDâ??,
    55));"
- id: 17967
  author: Paul Burns
  author_email: paul@internetware.co.uk
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0xMCAxMTozNTozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xMCAxMDozNTozOSArMDEwMA==
  content: Apologies for spamming your blog, but its escaping "&lt;Category&gt;" after
    the For and before the ()
- id: 17969
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wNC0xMCAxMTo0MzozMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xMCAxMDo0MzozMyArMDEwMA==
  content: Cheers dude, I've fixed it. It was &lt;Post&gt; though, because I'm searching
    for Posts.
---
<p>I don't find the NHibernate documentation to be that useful for anything more than the basics. When querying through an association (which you'll probably do a lot), I found there are different ways of achieving the same result. Using a blog as an example, I can query for Posts in a particular Category like this:</p>
<pre><code>DetachedCriteria criteria = DetachedCriteria.For&lt;Post&gt;()
	.CreateCriteria("Category")
	.Add(Expression.Eq("CategoryID", 55));</pre>
<p></code></p>
<p>When I first started using NHibernate in earnest, I saw CreateCriteria as a way of "drilling down" into the association, in this case the Category property on a Post. After that I can then add a constraint on the Categories which will affect the Posts which are returned. This is indeed the way it works, and the above approach returns what I'd expect. However, the same result can be achieved like this:</p>
<pre><code>DetachedCriteria criteria1 = DetachedCriteria.For&lt;Post&gt;()
	.Add(Expression.Eq("Category.CategoryID", 55));</pre>
<p></code></p>
<p>This is perhaps more intuitive for some, though it wasn't how I approached the problem. Both methods return the same result set, but there is one important difference. When you look at the generated SQL for each approach, the first method, drilling down via CreateCriteria, includes all of the columns for the Category entity, and so in this example you're selecting more data than you need to.</p>
<p>Chaining with CreateCriteria allows you to return data from multiple entities/tables, but for a simple query like I've shown, it's not the correct approach.</p>
