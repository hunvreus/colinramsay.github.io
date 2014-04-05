---
layout: post
status: publish
published: true
title: Introducing Phone2Flickr - A Proximity Bluetooth Photo Downloader
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 384
wordpress_url: http://colinramsay.co.uk/2007/09/05/introducing-toothr-a-proximity-bluetooth-photo-downloader/
date: !binary |-
  MjAwNy0wOS0wNSAxMjozODoyNCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOS0wNSAxMTozODoyNCArMDEwMA==
categories:
- Personal
- .NET
- Projects
tags: []
comments:
- id: 1507
  author: Sean Chambers
  author_email: dkode8@gmail.com
  author_url: http://schambers.wordpress.com
  date: !binary |-
    MjAwNy0wOS0wNSAxNDoyMjoyMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0wNSAxMzoyMjoyMiArMDEwMA==
  content: ! "neat! I will be purchasing a phone shortly that has an camera. I would
    love to try it out.\r\n\r\nOriginally I was going to buy the helio fin, but opted
    for a different phone. I had the same thinking you did, I thought that most of
    them were able to do something like this out of the box.\r\n\r\nkeep up the good
    work!"
- id: 1644
  author: Sean Chambers
  author_email: dkode8@gmail.com
  author_url: http://schambers.wordpress.com
  date: !binary |-
    MjAwNy0wOS0wOCAxNTo1NDo0OCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0wOCAxNDo1NDo0OCArMDEwMA==
  content: ! "Colin,\r\n\r\nBy pure coincidence, I just ordered a new samsung blackjack.
    It should be here next week. I would like to try this out to see if it works with
    my new phone. I havent really messed with bluetooth before, what are the requirements
    on the computer end as far as bluetooth."
- id: 1645
  author: colinramsay
  author_email: colinramsay@gmail.com
  author_url: http://
  date: !binary |-
    MjAwNy0wOS0wOCAxNjozNTo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0wOCAxNTozNTo0NCArMDEwMA==
  content: ! "I've got a little dongle that plugs into a USB slot to provide bluetooth
    capabilities, they are pretty cheap and the Windows side of things is fairly straightforward
    to set up - just pair your phone with your computer.\r\n\r\nI just realised that
    I never mentioned this app requires .NET 3.5 - it started off as a technology
    experiment :)"
---
<p>So after reporting my Bluetooth woes yesterday, IÂ decided that I may as well bite the bullet and write a full application to do the job. Phone2Flickr is a .NET application which will sit in your system tray and upload your phone photos to Flickr when it comes in range. This has gone under only limited testing with two Samsung phones so I'm not sure how it will handle others, plus I've only used it on my PC. This is seriously an alpha release.</p>
<p>You have to pair your phone with your PC in the normal way, using the Control Panel Bluetooth applet, and you also need to make the PC an authorised device on your phone otherwise you'll have to keep allowing the PC to perform actions. How you do this will vary on your phone model.</p>
<p><strong>This software currently requires .NET Framework 3.5, and that your phone supports the Obex File Transfer service</strong>. The UI for this <em>stinks</em>. Chances are it won't work for your device. But I wanted to get something online as it will give me impetus to improve it. I'm also <a HREF="http://dev.plastiscenic.co.uk/svn/projects/phonetoflickr/">releasing the source code</a>, and will most likely accept patches.</p>
<p><a TITLE="Phone2Flickr 0.1" HREF="http://colinramsay.co.uk/wp-content/uploads/2007/09/Phone2Flickr-01.zip">Phone2Flickr 0.1</a> is something I built for my own use which I hope others will enjoy. Please don't expect too much!</p>
