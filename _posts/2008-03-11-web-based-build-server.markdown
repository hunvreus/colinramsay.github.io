---
layout: post
status: publish
published: true
title: Web-Based Build Server
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 416
wordpress_url: http://colinramsay.co.uk/2008/03/11/web-based-build-server/
date: !binary |-
  MjAwOC0wMy0xMSAxMDoxMjoyMiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMy0xMSAwOToxMjoyMiArMDAwMA==
categories:
- Web
- Development
tags: []
comments:
- id: 16768
  author: asdasd
  author_email: asdasd@no.no
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0xNSAwODoxNDoyOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0xNSAwNzoxNDoyOSArMDAwMA==
  content: TeamCity?
- id: 16777
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wMy0xNSAxMTowODoxNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0xNSAxMDowODoxNiArMDAwMA==
  content: ! 'From the post: "Iâ??ve tried TeamCity, which seemed ok, but the interface
    wasnâ??t great and it doesnâ??t support MbUnit."'
- id: 17032
  author: C. G. Brown
  author_email: cgbrown@projectlocker.com
  author_url: http://www.projectlocker.com
  date: !binary |-
    MjAwOC0wMy0yMCAxNDoxOToxOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0yMCAxMzoxOToxOSArMDAwMA==
  content: ! "At ProjectLocker, we do have a build product, BuildLocker.  We support
    Linux and Windows remote builds using Ant, Maven, or MSBuild.  We don't directly
    support MBUnit, but if MSBuild can invoke MBUnit tasks and the necessary libraries
    are bundled in your project, I would think that you could run them.  More information
    is available at http://www.projectlocker.com/site/build_locker.  We also have
    a 30-day money-back guarantee, so you can try the service without risk.\r\n\r\nWe
    also have Subversion hosting and Trac hosting if you need such services, with
    plans as low as $2.50/month.\r\n\r\nWe'd love for you to try us and give us any
    feedback that can help us improve the service for users like yourself."
---
<p>It surprises me that no-one offers a web-based build server - specify your source control connection details, set up a couple of tasks (build, test, report) and hit "go". Is there some obvious problem with this idea that I've missed?</p>
<p>I want a build server but I don't want to have to maintain the install or faff around with configs. I've tried TeamCity, which seemed ok, but the interface wasn't great and it doesn't support MbUnit.</p>
<p>I've started using <a href="http://www.beanstalkapp.com">Beanstalk</a> for Subversion hosting, and it works very well indeed, so maybe that's what's got my thirst for web-bases apps going.</p>
