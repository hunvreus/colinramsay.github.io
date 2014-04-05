---
layout: post
status: publish
published: true
title: NHibernate Query Woes
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 438
wordpress_url: http://colinramsay.co.uk/?p=438
date: !binary |-
  MjAwOC0wNS0yMSAxMzoxNzozMiArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNS0yMSAxMjoxNzozMiArMDEwMA==
categories:
- Personal
- NHibernate
tags: []
comments:
- id: 20064
  author: Ben Scheirman
  author_email: subdigital@gmail.com
  author_url: http://flux88.com
  date: !binary |-
    MjAwOC0wNS0yMSAxOToyNTo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0yMSAxODoyNTo1NSArMDEwMA==
  content: ! "a simple hql query should give you what you want:\r\n\r\nvar query =
    session.CreateQuery(\"from Post p left join p.Comments c where c.Author like :author\")\r\n
    \  .SetParameter(\"author\", \"ramsay\");\r\n\r\nvar posts = query.List();\r\n\r\nis
    this not what you want?  if you want to load just comments (no post or blog) then
    you can lazy load those associations easily.\r\n\r\nvar query = session.CreateQuery(\"from
    Comment c where c.Author like :author\").SetParameter(\"author\", \"ramsay\");\r\nvar
    comments = query.List();  // comment -&gt; posts is lazy loaded so theres a single
    select statement generated here."
- id: 20082
  author: Glyn Darkin
  author_email: glyn@darkinsystems.com
  author_url: http://www.darkinsystems.com
  date: !binary |-
    MjAwOC0wNS0yMiAxMzoyODo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0yMiAxMjoyODo1OSArMDEwMA==
  content: ! "I had a similar problem and resolved it by using the distinct key word.
    Therefore I guess you could use the distinct keyword on the blog object as that
    is the only object you are interested in as its children will get loaded lazily.\r\n\r\nGood
    Luck."
- id: 20083
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wNS0yMiAxMzozMDo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0yMiAxMjozMDo0NCArMDEwMA==
  content: Hmm, thanks for those tips guys. I'll have a look now and see if that'll
    do what I'm after. I suspect this is more a problem with my NHibernate knowledge
    than NH itself anyway...
- id: 20087
  author: Matt Hinze
  author_email: mhinze@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNS0yMiAxNToyOToyMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0yMiAxNDoyOToyMSArMDEwMA==
  content: is this not a job for DistinctRootEntityResultTransformer?
---
<p>I'm banging my head trying to solve a particular type of querying problem. I think I can simplify it like this:</p>
<blockquote><p>Categories have many Posts, Posts have many Comments</p></blockquote>
<p>I'd like to search for Comments with a particular author, which is easy enough, but I'd like my result set to be made up of Blogs which contain Posts which contain Comments with author = 'ramsay'.</p>
<p>The problem I'm having is that if I have 50 Comments then it'll return 50 duplicate Blogs to contain those comments. Argh! I can add groupings (i.e. group by Blog), but that means it'll only pull back the things I group by and not the full Blog objects.</p>
