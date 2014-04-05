---
layout: post
status: publish
published: true
title: Common Interfaces for Tool Families
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 463
wordpress_url: http://colinramsay.co.uk/?p=463
date: !binary |-
  MjAwOC0xMS0xNiAwMDo1NzowMCArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMS0xNSAyMzo1NzowMCArMDAwMA==
categories:
- LosTechies
- Development
tags: []
comments: []
---
<p>There are a load of different tool "families" in use in the .NET ecosystem which I'm sure LosTechies readers will take advantage of pretty much every day. IoC containers. Logging infrastructures. URL routing mechanisms. Each of these families operate on broadly similar principals - taking the container example, we know that we need to add types to the container and resolve types which are already in there. For logging, we'd generally have the ability to log to different levels of severity. So you can see that while the implementations and underlying behaviour may be significantly different, there is a layer of abstraction which highlights commonality.</p>
<p>Castle Project has a Castle.Core.Logging.ILogger class which supports the use of a variety of different logging systems within your applications. It is a facade behind which log4net or NLog does the magic while your application happily logs information while not worrying about what is actually taking care of the logging. To me, this is a very interesting method of supporting a tool family - expose the most common methods which a tool supports and let the tool get on with its own business.</p>
<p>What I'd like to see is a community effort to publish an ILogger interface to which various logging libraries can adhere, and an IContainer interface for IoC libraries, and other interfaces for various tool families which have enough common features. In this way, we can enable a new level of code sharing and integration between projects.</p>
<p>(also published at <a href="http://www.lostechies.com/blogs/colin_ramsay/archive/2008/11/13/common-interfaces-for-tool-families.aspx">my LosTechies blog</a>)</p>
