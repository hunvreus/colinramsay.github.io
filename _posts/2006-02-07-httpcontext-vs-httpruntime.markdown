---
layout: post
status: publish
published: true
title: HttpContext vs HttpRuntime
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 295
wordpress_url: http://www.colinramsay.co.uk/?p=295
date: !binary |-
  MjAwNi0wMi0wNyAwODo1NjowNyArMDAwMA==
date_gmt: !binary |-
  MjAwNi0wMi0wNyAwODo1NjowNyArMDAwMA==
categories:
- .NET
tags: []
comments: []
---
<p>I never knew this, but apparently you can access the ASP.NET cache through either HttpContext.Current.Cache or through HttpRuntime.Cache, and HttpRuntime is actually faster.</p>
<p>Peter Johnson also highlights a second benefit in his <a href="http://weblogs.asp.net/pjohnson/archive/2006/02/06/437559.aspx">blog entry on the subject</a> - HttpRuntime is available at all times, so you can use it in unit testing!</p>
