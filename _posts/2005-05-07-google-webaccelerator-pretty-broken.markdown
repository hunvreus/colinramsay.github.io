---
layout: post
status: publish
published: true
title: Google Webaccelerator - Pretty Broken
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 172
wordpress_url: http://www.colinramsay.co.uk/?p=172
date: !binary |-
  MjAwNS0wNS0wNyAxMDoyNzoyMiArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wNS0wNyAxMDoyNzoyMiArMDEwMA==
categories:
- Web
tags: []
comments: []
---
<p><a href="http://webaccelerator.google.com/">Google's Webaccelerator tool</a> <a href="http://www.37signals.com/svn/archives2/google_web_accelerator_hey_not_so_fast_an_alert_for_web_app_designers.php">has some nasty side effects</a>, because it bypasses javascript confirmations. Some may say that you shouldn't be doing this anyway ("RFC 2616 clearly states that you shouldn't perform state changing operations with a GET or HEAD method"). <a href="http://simon.incutio.com/archive/2005/05/06/bad">Simon Willison proves you wrong</a>. Watch as Webaccelerator destroys your website by prefetching all of your "Delete Record" links! I've also discovered an issue when trying to download files. For some reason it has wildly increase the time it takes for my downloads to start on some websites. I've uninstalled it.</p>
