---
layout: post
status: publish
published: true
title: JavaScript Date Implementations & Mobile Safari
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 739
wordpress_url: http://colinramsay.co.uk/?p=739
date: !binary |-
  MjAxMS0xMC0wMyAxMDoxMzoxMSArMDEwMA==
date_gmt: !binary |-
  MjAxMS0xMC0wMyAwOToxMzoxMSArMDEwMA==
categories:
- Javascript
tags: []
comments: []
---
<p>While there's commonality between browser Date() implementations, there are edge cases where certain browsers fail when others pass. This is particularly frustrating when working with Mobile Safari because its debugging support is limited to say the least. Take this example:</p>
<p><code>var date = new Date('Sun Oct 10 10:41:43 UTC 2010');</code></p>
<p>This works just fine for me in Chrome, Safari, and even my current version of the iOS Simulator's Mobile Safari. However on my iPhone 4 with the iOS 5 beta, this code:</p>
<p><code>console.log(date);</code></p>
<p>Will simply give "Invalid Date". Because of Mobile Safari's poor error reporting for things like this it can be extremely difficult to notice that Date() is the ultimate issue. The solution is to use a fixed implementation of Date - I used Date.parseDate within Sencha Touch, but if you're not using a framework you could look at <a href="http://www.datejs.com/">DateJS</a>.</p>
