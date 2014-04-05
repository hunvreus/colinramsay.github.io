---
layout: post
status: publish
published: true
title: PC Reliability and Disaster Recovery
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "Yesterday afternoon I was extracting the enormous archive for the <a href=\"http://www.microsoft.com/downloads/details.aspx?FamilyId=36B6609E-6F3D-40F4-8C7D-AD111679D8DC&amp;displaylang=en\">Orca
  Beta 1 VPC image</a> while watching an episode of 24 on my PC. Without warning,
  it rebooted. Now this is never a good sign, but at least it restarted... until it
  tried to get back into Windows, at which point it rebooted again. Safe mode and
  Last Known Config had the same problems, so I've now got a fried Windows install.\r\n\r\n"
wordpress_id: 361
wordpress_url: http://colinramsay.co.uk/2007/04/25/pc-reliability-and-disaster-recovery/
date: !binary |-
  MjAwNy0wNC0yNSAxMjo0NTo0NCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0yNSAxMTo0NTo0NCArMDEwMA==
categories:
- PC
- Hardware
- Reinstall
tags: []
comments:
- id: 59
  author: El Chimp
  author_email: firemunke@hotmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wNS0xNSAxMjo0Mzo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wNS0xNSAxMTo0Mzo1MyArMDEwMA==
  content: ! "Ouch.  That sounds like what happened to mine last year.  Thankfully
    it was two days after my final submission otherwise I would've been royally fucked.
    \ \r\n\r\nI feel your pain on the whole farrago of having to spend forever reinstalling
    stuff to make the thing even remotely bearable to use too.  A full virtual recording
    studio, Macromedia suite, Visual Studio, Photoshop &amp; Illustrator, and all
    the bog-standard web plugins/media codecs/virus protection/blah takes a surprisingly
    long time to reinstall/configure."
- id: 60
  author: colinramsay
  author_email: colinramsay@gmail.com
  author_url: http://
  date: !binary |-
    MjAwNy0wNS0xNSAxMjo0Nzo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wNS0xNSAxMTo0Nzo0NyArMDEwMA==
  content: ! "That was nearly a month ago and I'm only barely up to speed. What a
    nightmare.\r\n\r\nI have installed virtual pc (which is free now) and I've been
    pleasantly surprised with how nippy it is."
---
<p>Yesterday afternoon I was extracting the enormous archive for the <a href="http://www.microsoft.com/downloads/details.aspx?FamilyId=36B6609E-6F3D-40F4-8C7D-AD111679D8DC&amp;displaylang=en">Orca Beta 1 VPC image</a> while watching an episode of 24 on my PC. Without warning, it rebooted. Now this is never a good sign, but at least it restarted... until it tried to get back into Windows, at which point it rebooted again. Safe mode and Last Known Config had the same problems, so I've now got a fried Windows install.</p>
<p><a id="more"></a><a id="more-361"></a>I've got the hard disk in another PC right now, and I'm running <a href="http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/chkdsk.mspx">chkdsk</a> on it. So far it has taken over 10 hours, though I have managed to retrieve all of my important documents from it. I'm still holding out hope of actually being able to use the disk again without resorting to reinstalling Windows, but maybe I'm just being optimistic.</p>
<p><strong>Why Did This Happen?</strong></p>
<p>As mentioned, I was running a long extraction and watching video, so the load on my PC was pretty high for an extended period of time. The case I have is poor, and my three hard drives are right next to each other and were <em>hot</em>. I'm wondering whether this caused the problem. I've only got one chassis fan too, and there was loads of dust floating round inside.</p>
<p><strong>What Now?</strong></p>
<p>If I have to reinstall Windows, that means I've got to set up Visual Studio and all of the other little pieces that make using my computer bearable. As <a href="http://ayende.com/Blog/archive/2007/04/22/The-cost-of-upgrade.aspx">Ayende mentioned recently</a>, this takes serious time, and is something that I want to avoid or at least speed up. I've heard talk of using Virtual PC images to have a development environment backed up and ready to use, which could be a good way to get up and running fast. However it does seem that to get to this stage would mean setting up two PCs. And if I'm running VPC images, there will be a performance hit - and on my current machine this could be painful. Which means I'd have to buy a new PC, and so this particular disaster would have cost me hundreds of pounds.</p>
<p><strong>Data Policy</strong></p>
<p>Last year, I had another hard disk fail on my and I lost the source code for my Embrace website, <a href="http://www.happyandlost.co.uk">Happy and Lost</a>. This annoyed me big-time, and straightaway I began to use SVN for all of my code. However, there are still plenty of documents which I have <em>no backup plan</em> for, and that's probably not wise. <a href="http://www.hanselman.com/blog/OnLosingDataAndAFamilyBackupStrategy.aspx">Scott Hanselman details his family backup policy</a>, which is something I am going to look at in detail after I get up and running again.</p>
<p><strong>In Conclusion</strong></p>
<p>Firstly, I need a new case for my PC. I have my eyes on the <a href="http://www.ebuyer.com/UK/product/100727">Antec P180</a>, which is fairly pricey but gets rave reviews. There are two reasons for this - to improve airflow, and to give me better access to my drives. At the moment my case is all screws and bolts and horror. I need something better.</p>
<p>Secondly, I need to come up with a way of getting up and running <em>fast</em> after a PC disaster. As a software developer I live and die by the hardware which I use, and any downtime could be expensive.</p>
<p>Anyone who says "get a Mac" in response to this may experience the full force of my already frayed temper...</p>
<p>UPDATE: looks like the <a href="http://feeds.haacked.com/~r/haacked/~3/111779310/the-death-of-the-subtext-build-server.aspx">Subtext guys are feeling my pain</a>.</p>
