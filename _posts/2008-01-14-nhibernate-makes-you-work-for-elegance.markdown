---
layout: post
status: publish
published: true
title: NHibernate makes you work for elegance
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 409
wordpress_url: http://colinramsay.co.uk/2008/01/14/nhibernate-makes-you-work-for-elegance/
date: !binary |-
  MjAwOC0wMS0xNCAyMDo1OTozMyArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMS0xNCAxOTo1OTozMyArMDAwMA==
categories:
- NHibernate
tags: []
comments: []
---
<p>I've just ripped out a load of SqlAdapter/SqlDataReader code from the application I'm working on and replaced the whole lot with NHibernate. Much less code, with all my data access stuff in a single place - I don't have to go to the database and set up a stored procedure or anything like that.</p>
<p>This is the first time I've used Criteria to do anything complicated and thus far I've been able to come up with tidy looking solutions to all of my problems. But in a couple of cases I've been struggling to express my query in terms of criteria, and I've become pretty frustrated with the documentation. What's there is good, but woefully brief. </p>
<p>Google and <a href="http://www.ayende.com/Blog/category/510.aspx">Ayende</a> to the rescue, and by piecing together knowledge from various blog posts, I've got great code. But I had to do a fair bit of trawling to get there!</p>
