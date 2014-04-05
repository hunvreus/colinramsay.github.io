---
layout: post
status: publish
published: true
title: Easing NHibernate Development
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 494
wordpress_url: http://colinramsay.co.uk/?p=494
date: !binary |-
  MjAwOS0wMS0yNyAwMToyNzozMyArMDAwMA==
date_gmt: !binary |-
  MjAwOS0wMS0yNyAwMDoyNzozMyArMDAwMA==
categories:
- .NET
- C#
- NHibernate
tags: []
comments: []
---
<p><a href="http://www.hibernate.org/343.html">NHibernate</a> is now my framework of choice for working with a relational database. With a little bit of knowledge and a willingness to research, it's pretty straightforward to make NH jump through whichever hoops you need it to. That said, there are certainly a number of friction points which can slow down any development effort. Mostly, these can be solved with a couple of tricks and tools which can be applied at various stages of a project.</p>
<p><a href="http://code.google.com/p/fluent-nhibernate/">Fluent NHibernate</a> is a method of cutting down on XML mappings which are commonly associated with NH. While in the past, tools such as <a href="http://altinoren.com/activewriter/">ActiveWriter</a> have enabled developers to bypass the most laborious parts of creating mappings, Fluent NH takes it a step further and provides a strongly typed means of setting up your entity mappings without even touching XML. You can either use the <a href="http://blog.jagregory.com/2009/01/10/fluent-nhibernate-auto-mapping-introduction/">auto mapping facility</a> or fully customise the mappings, but it's all done with full intellisense support and a serious lack of angle brackets.</p>
<p>Once the mappings have been defined - either in XML or in code - you need to start working with the database itself. NHibernate has a built-in facility which can help you out here, by generating the database schema based on your entity mappings. In fact, in the latest releases, you can even update the existing schema without having to delete and recreate, which makes it possible to preserve your test data during development. This allows you to go end-to-end from the mappings direct to the database and keep in that context throughout the development process.</p>
<p>Here's a quick aside: some of the criticisms put against ORMs are that a developer with great SQL knowledge can tweak and craft code better than any autogenerating tool. From my point of view, every query would have to be written to a high standard, all column choices would have to be perfect every time. NHibernate's generated code has been reviewed by experts and it will be produced in the same way time after time, to the same level of quality.</p>
<p>With that in mind, I don't really have a problem letting NH control every part of my database interactions. What I do need is a way of ensuring that if the mappings i've created are wrong, or are sub-optimal, that I have a method of finding out what's going on. <a href="http://www.nhprof.com/">NH Profiler</a> is a piece of software which has recently started a beta phase and hooks in to NH itself to provide real-time analysis of what queries and sessions are being used by your application. As well as reporting, it also provides suggestions if it detects sub-optimal behaviour. Lazy loading, for example, can cause some nasty performance problems if used incorrectly, so NH Prof can pick up situations in which it would be better to change mappings to specify eager loading.</p>
<p>Over the last six months, new features and community involvement have transformed NH from a great development framework to the premier ORM for rapid development teams. The bumps have been smoothed, and we can get on with leveraging the wonderful work of the NH team.</p>
