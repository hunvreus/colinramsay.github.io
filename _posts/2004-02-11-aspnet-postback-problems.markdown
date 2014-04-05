---
layout: post
status: publish
published: true
title: ASP.NET postback problems
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 28
wordpress_url: http://www.colinramsay.co.uk/?p=28
date: !binary |-
  MjAwNC0wMi0xMSAxOTo0OToyNiArMDAwMA==
date_gmt: !binary |-
  MjAwNC0wMi0xMSAxOTo0OToyNiArMDAwMA==
categories:
- .NET
tags: []
comments: []
---
<p>Twice recently I've had issue with controls not triggering a postback. This is a bug is the Javascript produced by ASP.NET (no!) and the solution is to override the render method: <a href="http://asp.net/Forums/ShowPost.aspx?tabindex=1&amp;PostID=191690" title="asp.net forums">the asp.net forums</a>.</p>
