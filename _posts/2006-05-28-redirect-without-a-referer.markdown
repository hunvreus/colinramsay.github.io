---
layout: post
status: publish
published: true
title: Redirect without a Referer
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 318
wordpress_url: http://www.colinramsay.co.uk/?p=318
date: !binary |-
  MjAwNi0wNS0yOCAyMjo0NTozNyArMDEwMA==
date_gmt: !binary |-
  MjAwNi0wNS0yOCAyMjo0NTozNyArMDEwMA==
categories:
- Web
tags: []
comments: []
---
<p>Seems that Mininova detects your referer when you link to them, so for Metatorrent I needed a way to redirect to their server with a blank referer. I looked around for a way to do this in C# code, which I would have prefered, but to no avail. Still, I found a good solution - a meta refresh tag with your url on will send the client to the URL without a referer. Simple but effective.</p>
