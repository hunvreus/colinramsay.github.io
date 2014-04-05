---
layout: post
status: publish
published: true
title: NHibernate's Inverse Attribute
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "This post specifically refers to the use of the inverse attribute on Many-To-One
  relationships, such as a Category with many products. That's simply because it's
  the one I'm dealing with right now, and it's the one I've been using most commonly.\r\n"
wordpress_id: 418
wordpress_url: http://colinramsay.co.uk/2008/03/15/nhibernates-inverse-attribute/
date: !binary |-
  MjAwOC0wMy0xNSAwMTozMzoxNyArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMy0xNSAwMDozMzoxNyArMDAwMA==
categories:
- NHibernate
tags: []
comments:
- id: 16911
  author: Ben Scheirman
  author_email: subdigital@gmail.com
  author_url: http://flux88.com
  date: !binary |-
    MjAwOC0wMy0xNyAxNDowNTo1NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0xNyAxMzowNTo1NyArMDAwMA==
  content: ! "Just to add another way of saying it, inverse=true means... \"hey -
    the other side manages this collection!\"\r\n\r\nBe careful using bags though,
    if you set inverse=false on the many end of a bag NHibernate doesn't know what
    was added or deleted and has to delete and re-persist each item.  This can be
    horrendous for large collections.\r\n\r\nI think idbags are better in this scenario
    because you can uniquely define the row.\r\n\r\nThis burned me in the past."
- id: 17148
  author: andriy
  author_email: drozzy@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0yMyAwNjo0Njo0NSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0yMyAwNTo0Njo0NSArMDAwMA==
  content: ! "As much as i love your screencasts - your blog right-aligned text is
    Horrible. I cannot read anything longer then on line and it is very hard to see
    the topics.\r\n\r\nIn the name of good design...\r\n\r\nIn any case, the content
    is great though!"
- id: 17194
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wMy0yNCAxNTozNjozOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0yNCAxNDozNjozOCArMDAwMA==
  content: There you go andriy, seeing as you were so nice about the content, you
    can have a nice fresh design!
---
<p>This post specifically refers to the use of the inverse attribute on Many-To-One relationships, such as a Category with many products. That's simply because it's the one I'm dealing with right now, and it's the one I've been using most commonly.<br />
<a id="more"></a><a id="more-418"></a><br />
I've never really "got" the inverse attribute, so I'm going to try and write it out in order to understand it better. I've used it plenty, but often blindly, and probably not in the right way for my situation. Let's assume that we create a Category:</p>
<pre><code class="csharp">Category category = new Category{Name="Lovely Category"};
session.Save(category);</code></pre>
<p>Very good; the Category is saved to the database and all is well. Now, let's say that at a later time we wish to add a Product to this Category. Here's our Product:</p>
<pre><code class="csharp">Product product = new Product{Name = "Sweet Product"};</code></pre>
<p>We need to make a two-step operation before saving it:</p>
<pre><code class="csharp">product.Category = category;
category.Products.Add(product);</code></pre>
<p>In other words, the Product needs to know about the Category and the Category needs to know about the Product. It is <em>not</em> sufficient to do one or the other. Think about it outside of the bounds of NHibernate if that doesn't immediately make sense. Now, to the saving of the Product, and where the Inverse attribute comes in. Assuming you have a standard bidirectional one-to-many relationship set up in your mapping files, you'll have something like this on your Category:</p>
<pre><code class="xhtml">&lt;bag name=&quot;Products&quot; cascade=&quot;all&quot; inverse=&quot;true|false&quot;&gt;
	&lt;key column=&quot;CategoryId&quot;/&gt;
	&lt;one-to-many class=&quot;Product&quot;/&gt;
&lt;/bag&gt;</pre>
<p></code></p>
<p>And something like this one your Product:</p>
<pre><code>&lt;many-to-one name=&quot;Category&quot; class=&quot;Category&quot; column=&quot;CategoryId&quot;/&gt;</code></pre>
<p>Here's the long and short of it. If you want to do this (parent):</p>
<pre><code class="csharp">session.Save(category);</code></pre>
<p>Then you need to have inverse=true on your bag. If you want this to work (child):</p>
<pre><code class="csharp">session.Save(product);</code></pre>
<p>You need inverse=false on the bag. Actually that even makes sense to me now.</p>
