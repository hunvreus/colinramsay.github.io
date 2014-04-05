---
layout: post
status: publish
published: true
title: Integer app.config Values
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 334
wordpress_url: http://www.colinramsay.co.uk/?p=334
date: !binary |-
  MjAwNi0xMC0yMyAxMDoyMzo1MiArMDEwMA==
date_gmt: !binary |-
  MjAwNi0xMC0yMyAxMDoyMzo1MiArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>This is the nicest looking way I've come up with of reading an integer from the app.config. It also sets a default if the configuratation key doesn't exist or isn't an integer.</p>
<blockquote><p>int notificationInterval;</p>
<p>// Try and find a configured value for this, but if it doesn't exist set it to 30 seconds.<br />
if(!int.TryParse(ConfigurationManager.AppSettings["notificationCheckInterval"], out notificationInterval))<br />
{<br />
	notificationInterval = 30000;<br />
}</p></blockquote>
<p>Yum.</p>
