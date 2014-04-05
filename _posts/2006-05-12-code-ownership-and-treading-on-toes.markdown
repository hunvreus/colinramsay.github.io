---
layout: post
status: publish
published: true
title: Code Ownership and Treading on Toes
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 310
wordpress_url: http://www.colinramsay.co.uk/?p=310
date: !binary |-
  MjAwNi0wNS0xMiAyMTozMjoxNSArMDEwMA==
date_gmt: !binary |-
  MjAwNi0wNS0xMiAyMTozMjoxNSArMDEwMA==
categories:
- Agile Development
tags: []
comments: []
---
<p><a href="http://martinfowler.com/bliki/CodeOwnership.html">Martin Fowler talks about Code Ownership</a> and seems to favour Weak Ownership of code:</p>
<blockquote><p>Weak code ownership is similar [to strong code ownership] in that modules are assigned to owners, but different in that developers are allowed to change modules owned by other people. Module owners are expected to take responsibility for the modules they own and keep an eye on changes made by other people. If you want to make a substantial change to someone else's module it's polite to talk it over with the module owner first.</p></blockquote>
<p>This method of ownership boils down to a simple rule - <i>be polite</i>. You can do whatever you want but just don't tread on people's toes, don't change things that will break other apps, don't change public interfaces.</p>
