---
layout: post
status: publish
published: true
title: Url Rewriting Options on IIS
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: Apache users are spoiled when it comes to rewriting, thanks to the power
  of mod_rewrite. But on IIS, things are a little different so I thought I'd take
  some time out to explain the options.
wordpress_id: 349
wordpress_url: http://www.colinramsay.co.uk/2007/04/17/url-rewriting-options-on-iis/
date: !binary |-
  MjAwNy0wNC0xNyAxMTowNDoxNSArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0xNyAxMTowNDoxNSArMDEwMA==
categories:
- .NET
- IIS
tags: []
comments:
- id: 269
  author: dizzy
  author_email: graig.stock@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wNi0yMiAwMjoyNjoyMSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wNi0yMiAwMToyNjoyMSArMDEwMA==
  content: ! "Check out IIS Mod-Rewrite which is fully compatible with mod_rewrite
    and supports .htaccess:\r\n\r\nhttp://www.micronovae.com/ModRewrite/ModRewrite.html\r\n\r\nThat's
    for really spoiled mod_rewrite users..."
- id: 20986
  author: adfvadfva
  author_email: admin@ffffff.uni.cc
  author_url: http://adfvadfva
  date: !binary |-
    MjAwOC0wNi0yNyAyMzoyNzo1MCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0yNyAyMjoyNzo1MCArMDEwMA==
  content: sd
- id: 20990
  author: send free email
  author_email: admiaan@anonymailer.net
  author_url: http://anonymailer.net
  date: !binary |-
    MjAwOC0wNi0yNyAyMzozMjozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0yNyAyMjozMjozNSArMDEwMA==
  content: test
- id: 23157
  author: cwxwwwxdfvwwxwx
  author_email: opipoleikoq8604@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0yNSAyMDowNzowOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0yNSAxOTowNzowOSArMDAwMA==
  content: well, hi admin adn people nice forum indeed. how's life? hope it's introduce
    branch ;)
---
<p>Apache users are spoiled when it comes to rewriting, thanks to the power of mod_rewrite. But on IIS, things are a little different so I thought I'd take some time out to explain the options.<a id="more"></a><a id="more-349"></a> First off: why rewrite? My main reason is that I like having neat URLs, such as the ones on this blog. It's a rough edge that I like to round off. However, there are practical reasons for having neat URLs, such as readability and hackability. It's up to you to decide whether the extra effort is worth it, but I'm going to show you how little effort can be involved.</p>
<p>ASP.NET 2 actually has some rewriting capabilities built in, but the usefulness will depend on what you're trying to achieve. The <a href="http://msdn2.microsoft.com/en-us/library/ms228302.aspx">urlMappings element in the web.config</a> allows you map a particular aspx page to another aspx page, and include querystring parameters as you go. However, what it doesn't let you do is include dynamic values in the querystring, which lead James Avery to believe that <a href="http://dotavery.com/blog/archive/2005/11/06/5890.aspx">ASP.NET 2.0 Url Rewriting crippled to the point of uselessness</a>. For serious applications, I agree with him, but because it's built-in, I think small applications can still leverage this functionality.</p>
<p>You can roll your own rewriter using IIS and ASP.NET. This involves mapping all requests in IIS through the ASP.NET ISAPI module, and then coding up an HTTP Handler to route those requests as you require. This gives you a high level of flexibility, and means that you can code your rewrite rules in your .NET language of choice. However, this approach means that every resource is channeled through ASP.NET which is a bit unnecessary. It also means rolling your own solution (and there are <a href="http://msdn2.microsoft.com/en-us/library/ms972974.aspx">plenty</a> of <a href="http://www.kowitz.net/2006/3/8/IHTTPModule+vs+IHTTPHandler+.aspx">articles</a> to show you how), though there are plenty of similar things available for download that might fit your needs.</p>
<p>Then there are ISAPI module, which are written in super-fast C and purely geared for your rewrite needs. One example of this is <a href="http://www.isapirewrite.com/">HeliconTech's IsapiRewrite</a> which uses an httpd.ini file to allow you to write mod_rewrite-like rules on a global or per-site basis. Each rule can incorporate regular expressions, giving excellent flexibility. Having used it in production I can recommend HeliconTech's solution.</p>
<p>A free alternative to the IsapiRewrite is <a href="http://cheeso.members.winisp.net/IIRF.aspx">IIRF</a>, which also tries to emulate mod_rewrite. It supports PCRE regular expressions, and at the moment is my <a href="http://cheeso.members.winisp.net/IIRF.aspx">recommended solution to URL rewriting</a>. Great price, great features, and very easy to install. It's even open source with a favourable license.</p>
<p>There is one footnote to the use of ISAPI modules for rewriting - depending on your hosting solution, you may not be able to register a new ISAPI module or map all requests to ASP.NET due to security restrictions imposed by your hosting provider. In this case you may be restricted to the first two solutions.</p>
