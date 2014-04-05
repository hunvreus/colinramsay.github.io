---
layout: post
status: publish
published: true
title: Microsoft Access Web Table Row Limits
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 99
wordpress_url: http://www.colinramsay.co.uk/?p=99
date: !binary |-
  MjAwNC0wNy0xNCAyMzo1Njo1MiArMDEwMA==
date_gmt: !binary |-
  MjAwNC0wNy0xNCAyMzo1Njo1MiArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>When using Access as the database for a website, I've stumbled upon an issue - there appears to be some kind of performance threshold at around 9000 records. If there are more than 9000 records in a single table, performance for the entire database just goes to shit...</p>
<p>I would be surprised to find that this is a genuine limitation of Access. I suspect it is more a problem with my code or the database setup. Still, the interim solution is to remove 3000 old records from that table.</p>
