---
layout: post
status: publish
published: true
title: Drag and Drop Web Development
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 307
wordpress_url: http://www.colinramsay.co.uk/?p=307
date: !binary |-
  MjAwNi0wNS0wOSAyMTozNzowMiArMDEwMA==
date_gmt: !binary |-
  MjAwNi0wNS0wOSAyMTozNzowMiArMDEwMA==
categories:
- Web
- .NET
- Microsoft
tags: []
comments: []
---
<p>Visual Studio is a fantastic development environment. The HTML editor in VS2005 alone shows that there are some very considerate individuals at Microsoft. But I'd like to explain why the overall drive of Microsoft's web development ideas are flawed.</p>
<p>When you are developing a Winforms application - a desktop program - Visual Studio allows you to drag and drop controls such as buttons and textboxes onto a blank window, and then edit their properties, such as default text or border size. Developing an application using this method is pretty sweet. You've got a strong event model too, so that you can have actions which respond to user input in a timely fashion. </p>
<p>Now, when you are using Visual Studio to create a web application, it also tries to offer you the same experience. Drag and drop, WYSIWYG designing, event model. But the trouble is that it really is a misunderstanding of the way the web works.</p>
<p>The WYSWYG for the web doesn't work. There's too much variation. Auto generated code doesn't work - you don't get content/presentation separation and you get bloated HTML. The HTTP is stateless; trying to overlay an eventing model is fundamentally flawed.</p>
<p>I understand where MS is coming from here. They want web and Windows developers to have the same experience. But these are different platforms, with different limitations and which require a different skillset to work with. Microsoft is trying to abstract developers from the real world of the web and it ain't gonna work.</p>
