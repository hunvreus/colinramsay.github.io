---
layout: post
status: publish
published: true
title: Services and External Processes
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 164
wordpress_url: http://www.colinramsay.co.uk/?p=164
date: !binary |-
  MjAwNS0wNC0zMCAxNDoxMDoyNCArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wNC0zMCAxNDoxMDoyNCArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>If you want to start a process from a Windows service, such as Notepad.exe or a music player then you need to allow the service to interact with the desktop. If you go to the Service properties in the services.msc, you can edit this manually in the Log On tab. That's not ideal - you need to have this activated on install. For some reason there's no property which can be set for this, but <a href="http://www.codeproject.com/csharp/CsWindowsServiceDesktop.asp">CodeProject has a way of doing it via the registry</a>.</p>
