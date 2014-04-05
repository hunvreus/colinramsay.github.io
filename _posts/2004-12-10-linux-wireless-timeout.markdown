---
layout: post
status: publish
published: true
title: Linux Wireless Timeout
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 122
wordpress_url: http://www.colinramsay.co.uk/?p=122
date: !binary |-
  MjAwNC0xMi0xMCAwMDowOTowNiArMDAwMA==
date_gmt: !binary |-
  MjAwNC0xMi0xMCAwMDowOTowNiArMDAwMA==
categories:
- Site Stuff
tags: []
comments: []
---
<p>My server is connected to my home network through Wifi. If there is no traffic between the server and the network for a period of time, the server drops out of the network completely and can't be reconnected without a reboot. I have been managing this by SSHing to the server and instructing it to constantly ping my router. Constant traffic = no drop. However, this relies on having my SSH client open all the time. I have reconfigured the wireless card to try and resolve this; I have switched off power management and fiddled with a few more settings.</p>
<p>Let's see what happens shall we?</p>
