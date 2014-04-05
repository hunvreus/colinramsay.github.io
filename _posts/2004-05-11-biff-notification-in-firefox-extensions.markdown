---
layout: post
status: publish
published: true
title: Biff Notification in Firefox Extensions
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 84
wordpress_url: http://www.colinramsay.co.uk/?p=84
date: !binary |-
  MjAwNC0wNS0xMSAxODo1MzozNSArMDEwMA==
date_gmt: !binary |-
  MjAwNC0wNS0xMSAxODo1MzozNSArMDEwMA==
categories:
- Mozilla
tags: []
comments: []
---
<p>So I wanted a little popup Biff notification to appear when feeds have been updated. After a<a href="http://forums.mozillazine.org/viewtopic.php?t=75893" title="Mozillazine">sking in the Mozillazine forums</a> the answer turned up. Courtesy of richwklein, here you go:</p>
<p>var alerts = Components.classes["@mozilla.org/alerts-service;1"].getService(Components.interfaces.nsIAlertsService);<br />
alerts.showAlertNotification(aImageUrl, aAlertTitle, aAlertText, alertTextClickable, aAlertCookie, aAlertListener);</p>
<p>Every argument to showAlertNotification can be null, then you want alertTextClickable as a boolean and aAlertTitle/aAlertText as a string. Lovely!</p>
