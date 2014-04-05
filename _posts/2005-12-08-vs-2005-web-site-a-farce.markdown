---
layout: post
status: publish
published: true
title: VS 2005 Web Site - A Farce
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 284
wordpress_url: http://www.colinramsay.co.uk/?p=284
date: !binary |-
  MjAwNS0xMi0wOCAwOTo0OToxNyArMDAwMA==
date_gmt: !binary |-
  MjAwNS0xMi0wOCAwOTo0OToxNyArMDAwMA==
categories:
- .NET
tags: []
comments: []
---
<p>Web Sites in Visual Studio 2005 are even further removed from standard projects than they were in 2003. With the advent of partial classes, there's a lot of hidden jiggery-pokery going on which means that your "built" website consists of a load of temporary dlls somewhere on your hard drive.</p>
<p>If you want to reference code written in your web site, you can't. There's no persistant dll to reference in another project. In some ways this is good, because it encourages code which doesn't belong to your UI to be extracted into encapsulated classes in other projects.</p>
<p>Anyway, <a href="http://weblogs.asp.net/scottgu/archive/2005/12/07/432630.aspx">ScottGu's talking about a new sort of Web Project</a> which will wrap all the compiled code into a single persistant dll. This will also see the return of the Project file for web sites. But you'll still be able to launch from the filesystem using Cassini.</p>
