---
layout: post
status: publish
published: true
title: Some Ajax niceties for ASP.net and more
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 292
wordpress_url: http://www.colinramsay.co.uk/?p=292
date: !binary |-
  MjAwNi0wMS0yNiAwOToyNToxMiArMDAwMA==
date_gmt: !binary |-
  MjAwNi0wMS0yNiAwOToyNToxMiArMDAwMA==
categories:
- .NET
- Ajax
tags: []
comments: []
---
<p><a href="http://www.comfortasp.de/Default.aspx">ComfortASP is an AJAX like framework for ASP.NET</a> which replaces normal postbacks with an XMLHTTPRequest based server call. The page, or sections of the page, will then be automagically replaced by the server response using javascript. If javascript is turned off then the whole thing degrades.</p>
<p>The framework includes some nice controls, including one to scroll to a point on the page when the server response returns. My main concern is that by using this framework, navigating between pages doesn't change the URL in the address bar. It also seems to break my back button in Firefox 1.5.</p>
<p>That's a shame because this is a great idea - abstracting AJAX to the point where you don't have to worry about it at all. But I think there are limitations here that would stop me from using <a href="http://www.comfortasp.de/Default.aspx">ComfortASP</a> in anger.</p>
<p>In other news, here's a <a href="http://foldblog.blogspot.com/2006/01/ajax-handling-multiple-xmlhttprequests.html">post on doing multiple concurrent XMLHTTPRequests</a> from a single page.</p>
