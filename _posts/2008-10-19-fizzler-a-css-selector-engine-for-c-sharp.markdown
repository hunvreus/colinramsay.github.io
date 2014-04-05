---
layout: post
status: publish
published: true
title: ! 'Fizzler: A CSS Selector Engine for C#'
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 457
wordpress_url: http://colinramsay.co.uk/?p=457
date: !binary |-
  MjAwOC0xMC0xOSAxNTo1NDo0NSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0xMC0xOSAxNDo1NDo0NSArMDEwMA==
categories:
- CSS
- Projects
- C#
- Fizzler
tags: []
comments:
- id: 22830
  author: Mikael
  author_email: mikael@engdahl.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0xOCAxMzoxNDoyNyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0xOCAxMjoxNDoyNyArMDAwMA==
  content: ! "This rocks (from what I've seen so far)!\r\n\r\nWill be using it for
    all my web spidering from now on."
- id: 23419
  author: ! 'Interesting Finds: 2009 01.15 ~ 01.17 | Web Hosting and Domains'
  author_email: ''
  author_url: http://www.findwebhosting.us/interesting-finds-2009-0115-0117/
  date: !binary |-
    MjAwOS0wMS0yMSAxNDoxMTo0MiArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0yMSAxMzoxMTo0MiArMDAwMA==
  content: ! '[...] Why learning CSS is important in a (web) development world - Fizzler:
    A CSS Selector Engine for C# [...]'
- id: 24779
  author: Colin Eberhardt
  author_email: ceberhardt@scottlogic.co.uk
  author_url: http://www.scottlogic.co.uk/blog/wpf/
  date: !binary |-
    MjAwOS0wMy0wNSAxNzowMToyOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMy0wNSAxNjowMToyOCArMDAwMA==
  content: ! "Hi Colin,\r\n\r\nJust been playing with your CSS engine - top notch
    stuff. I am actually using it as a mechanism for selecting elements within a WPF
    visual tree. I have placed an interface between your CSS engine and the HTMLNode,
    then replaced this with a WPF VisualTreeNode. It works a treat :-)\r\n\r\nI think
    I have found a bug in your selector though - are you still actively developing?
    If so, can I send you a new test case - you could probably fix it far quicker
    than I can!\r\n\r\nI will be blogging about my code shortly - so will give you
    a shout.\r\n\r\nRegards, Colin E."
---
<p>Over the past few weeks I've been throwing this together in my full time - a class library to pull HTML nodes from a page using a CSS selector. <a href="http://code.whytheluckystiff.net/hpricot/">hpricot</a> for Ruby would be a good comparison. It uses the <a href="http://www.codeplex.com/htmlagilitypack">HTML Agility Pack</a> behind the scenes, to clean up the source document, and provide means of reading the document nodes.</p>
<p>I've got a limited suite of unit tests which document the current level of support, most CSS 2.1 stuff is in there, and a couple of CSS 3 ones. The unit tests are partially pinched from jQuery's selector engine unit tests, so thank you to the jQuery team.</p>
<p>It works like this:</p>
<pre><code class="csharp">SelectorEngine engine = new SelectorEngine(htmlString);
IList<HtmlNode> nodes = engine.Parse("#p>a");</code></pre>
<p>Pretty simple stuff. There are no binaries yet, as I consider it alpha-quality, but you can check it out over at <a href="http://code.google.com/p/fizzler/">Google Code</a>. Contributions would be appreciated.</p>
