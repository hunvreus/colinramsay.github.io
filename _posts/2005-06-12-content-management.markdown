---
layout: post
status: publish
published: true
title: Content Management
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 214
wordpress_url: http://www.colinramsay.co.uk/?p=214
date: !binary |-
  MjAwNS0wNi0xMiAxMzo1NzoxNyArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wNi0xMiAxMzo1NzoxNyArMDEwMA==
categories:
- Uncategorized
tags: []
comments: []
---
<p><title>Content Management</title>I read with interest a post at Superflous Banter on creating a new Content Management System in Rails. While I agree that the Ultimate CMS has yet to be created, I think that a lots of the projects which attempt to reach this holy grail of the web misunderstand the major problems.</p>
<p>Let me outline one of these problems.</p>
<p>A blog system such as MT or Wordpress will let you post news items to site pages with a single layout. They do this very well.</p>
<p>What happens if you've got a website with lots of different layouts? Where you want to edit news, change the text on an "About Us" page, edit stuff in a sidebar and in the tagline of yet another page? You need a templating system, and you need a layer of abstraction to make sure that the user experience is a good one.</p>
<p>But your abstracting can end up being an obstruction for power users. And so maybe you add in some kind of advanced interface to control what content goes in which part of a template. And then you need a swathe of options to control all this. </p>
<p>The problem with CMS systems is in how they balance simplicity, flexibility, and good UI.</p>
