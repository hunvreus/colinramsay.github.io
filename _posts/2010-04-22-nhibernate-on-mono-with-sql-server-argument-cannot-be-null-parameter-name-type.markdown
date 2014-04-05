---
layout: post
status: publish
published: true
title: ! 'NHibernate on Mono with SQL Server - "Argument cannot be null. Parameter
  name: type"'
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 637
wordpress_url: http://colinramsay.co.uk/?p=637
date: !binary |-
  MjAxMC0wNC0yMiAxMzozOToyNSArMDEwMA==
date_gmt: !binary |-
  MjAxMC0wNC0yMiAxMjozOToyNSArMDEwMA==
categories:
- NHibernate
- Mono
tags: []
comments: []
---
<p>When trying to use Mono on OSX to run an existing website, I was getting the above error thrown by NHibernate. Thanks to <a href="http://sta-blockhead.blogspot.com/2009/06/systemdatasqlclientsqlcommandset.html">this post by "sta.blockhead"</a> I was able to understand that switching my NHibernate adonet.batch_size configuration to zero will bypass the issue. </p>
