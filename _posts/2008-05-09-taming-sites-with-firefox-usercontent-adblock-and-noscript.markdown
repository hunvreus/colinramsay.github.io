---
layout: post
status: publish
published: true
title: Taming Sites with Firefox - UserContent, AdBlock and NoScript
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 434
wordpress_url: http://colinramsay.co.uk/?p=434
date: !binary |-
  MjAwOC0wNS0wOSAwMTowNDo0MSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNS0wOSAwMDowNDo0MSArMDEwMA==
categories:
- Web
- Firefox
tags: []
comments: []
---
<p><a class='imageThumb alignright' href='http://colinramsay.co.uk/wp-content/uploads/2008/05/before.png'><img src="http://colinramsay.co.uk/wp-content/uploads/2008/05/before-150x150.png" alt="Football 365 - After" title="Football 365 - After" width="150" height="150" class=" size-thumbnail wp-image-436" /></a>It began with <a href="http://adblockplus.org/">AdBlock</a>... this extension to Firefox automatically removes adverts from the pages you browse - including the most annoying animated Flash horrors. It even updates itself to make sure that it stays one step ahead of ad-serving sites.</p>
<p>Unfortunately there were a couple of persistant sites that remained troublesome to visit. One of those was <a href="http://www.football365.com/">Football365</a>, which used Javascript to include a couple of diversions, including a speedy tickertape (and we all know how annoying <a href="http://colinramsay.co.uk/tickertape/current/styled-demo.html">those</a> can be). In stepped <a href="http://noscript.net/">NoScript</a>, which allows you to set up a whitelist of sites which should be allowed to run scripts. Bye bye ticker tape!</p>
<p><a class='imageThumb alignleft' href='http://colinramsay.co.uk/wp-content/uploads/2008/05/after.png'><img src="http://colinramsay.co.uk/wp-content/uploads/2008/05/after-150x150.png" alt="Football 365 - After" title="Football 365 - After" width="150" height="150" class="size-thumbnail wp-image-435" /></a>So now I had a calm and much less cluttered Football365. I remember a Firefox feature which would let me take it a step further. A <a href="http://support.mozilla.com/en-US/kb/Editing+configuration+files#userContent_css">custom UserContent.css</a> allows you to write a CSS targetted to specific domains, meaning you can completely override the styling of a given website. For F365 I removed a couple of blocks I wasn't interested in or that cluttered things up, made the layout full width, and increased the font size a little, as well as a few other little tidying tweaks.</p>
<p>From an fixed-width animated monster with sound-effect ridden adverts, I've now got a sane and readable site which doesn't torment me with its layout, and in just three simple steps. The most dramatic of these is possible due to the use of a CSS layout underlying the F365 pages, a handy piece of foresight by their web team.</p>
