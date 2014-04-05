---
layout: post
status: publish
published: true
title: XPI Creation
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 97
wordpress_url: http://www.colinramsay.co.uk/?p=97
date: !binary |-
  MjAwNC0wNi0yNyAyMjozODoyNSArMDEwMA==
date_gmt: !binary |-
  MjAwNC0wNi0yNyAyMjozODoyNSArMDEwMA==
categories:
- Mozilla
tags: []
comments: []
---
<p>Note to self: when creating XPIs for Firefox extensions, make sure that you create the achive properly. The install.rdf and chrome directory must be in the root of the archive - I was repeatedly making an archive which was /myextension/install.rdf.</p>
<p>DOH.</p>
<p><a href="http://ted.mielczarek.org/code/mozilla/ffinstall/" title="Ted Mielczarek">This web tool</a> makes the creation of install.rdf a doddle too, I suggest you try it out.</p>
