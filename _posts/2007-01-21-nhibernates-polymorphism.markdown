---
layout: post
status: publish
published: true
title: NHibernate's Polymorphism
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 343
wordpress_url: http://www.colinramsay.co.uk/?p=343
date: !binary |-
  MjAwNy0wMS0yMSAyMzo1MDo1NiArMDAwMA==
date_gmt: !binary |-
  MjAwNy0wMS0yMSAyMzo1MDo1NiArMDAwMA==
categories:
- .NET
tags: []
comments: []
---
<p>I've got a fairly complex database structure for a project I'm working on, and I was trying to work out how to query for what I needed. I'm using Active Record, which uses NHibernate underneath.</p>
<p>I spotted this in the "polymorphic queries" section of the <a href="http://www.hibernate.org/hib_docs/reference/en/html/queryhql.html">HQL docs</a> (for Java, think C#):</p>
<blockquote><p>"Hibernate queries may name any Java class or interface in the from clause."</p></blockquote>
<p>Well, awesome. This means that given the correct database schema, I can query for objects which implement a particular interface - in my case INewsworthy. A quick search came up with <a href="http://forum.hibernate.org/viewtopic.php?t=969472">some sample code</a> for doing this, though if you're using Active Record you need to get hold of an ISession first.<br />
<code>String id = 'xxx';</code></p>
<p><code>IResearchItemDatumParent parent =<br />
session.CreateCriteria(typeof(IResearchItemDatumParent))<br />
.Add(Expression.Eq("ID", id))<br />
.UniqueResult&lt;iresearchitemdatumparent&gt;();</code></p>
<p>After adapting this to suit my needs, I was left with three lines of code that did something pretty incredible in an extremely elegant manner.</p>
