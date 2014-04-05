---
layout: post
status: publish
published: true
title: IHttpHandlerFactory
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 135
wordpress_url: http://www.colinramsay.co.uk/?p=135
date: !binary |-
  MjAwNS0wNC0wNCAxOTowNDowMCArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wNC0wNCAxOTowNDowMCArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>I wrote a URL rewriting and templating system for Internetware's upcoming website solution, and used RewritePath to send the user to a page which I looked up out of the database. Uber ASP has an article of doing this <a href="http://www.uberasp.net/getarticle.aspx?id=49">via an IHttpHandlerFactory</a> instead. There are some downsides to RewritePath, so I will be investigating this.</p>
