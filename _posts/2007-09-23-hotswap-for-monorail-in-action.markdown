---
layout: post
status: publish
published: true
title: HotSwap for Monorail - In Action
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 392
wordpress_url: http://colinramsay.co.uk/2007/09/23/hotswap-for-monorail-in-action/
date: !binary |-
  MjAwNy0wOS0yMyAxMjowODoxNCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOS0yMyAxMTowODoxNCArMDEwMA==
categories:
- .NET
- Agile Development
- Monorail
- Screencasts
- C#
- Windsor
- Castle
tags: []
comments:
- id: 2417
  author: MonoRail HotSwap - J.D. Meridth
  author_email: ''
  author_url: http://www.lostechies.com/blogs/jason_meridth/archive/2007/09/23/monorail-hotswap.aspx
  date: !binary |-
    MjAwNy0wOS0yMyAyMToyODozMSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0yMyAyMDoyODozMSArMDEwMA==
  content: ! '[...] hearing Colin pronounce it) posted on an idea he has - MonoRail
    HotSwap and Colin Ramsay did a screencast of MonoRail HotSwap.&nbsp; I know that
    the AppDomain having to reset because a code change occurred can be annoying [...]'
- id: 2439
  author: Sean Chambers
  author_email: dkode8@gmail.com
  author_url: http://www.lostechies.com/blogs/sean_chambers/default.aspx
  date: !binary |-
    MjAwNy0wOS0yNCAwMjozOTowNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0yNCAwMTozOTowNiArMDEwMA==
  content: ! "Colin,\r\n\r\nCool stuff. You have to do more of these screencasts.
    They are very helpful. Instead of going and looking at the code real quick. I
    can watch you set it up and then go look at the code if I want. It's great!\r\n\r\nAs
    always, keep up the good work man!\r\n\r\nSean"
- id: 2461
  author: Introducing MonoRail.HotSwap - moleskine di un programmatore
  author_email: ''
  author_url: http://dotnetmarche.org/blogs/andreabalducci/archive/2007/09/24/introducing-monorail-hotswap.aspx
  date: !binary |-
    MjAwNy0wOS0yNCAwNzo1NDo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0yNCAwNjo1NDo0NyArMDEwMA==
  content: ! '[...] post di Ayende Introducing MonoRail.HotSwap e lo screencast fatto
    da Colin Ramsay dal suo post http://colinramsay.co.uk/2007/09/23/hotswap-for-monorail-in-action/.  Posted:
    Sep 24 2007, 09:52 AM by andrea.balducci | with no comments Filed under: library,
    [...]'
- id: 2467
  author: Harry M
  author_email: mcintyre321@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0yNCAxMDowNTo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0yNCAwOTowNTo1MSArMDEwMA==
  content: Will this work using webforms?
- id: 2468
  author: colinramsay
  author_email: colinramsay@gmail.com
  author_url: http://
  date: !binary |-
    MjAwNy0wOS0yNCAxMDoxNDo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0yNCAwOToxNDo1OSArMDEwMA==
  content: ! "Harry M:\r\n\r\nThe approach uses the Windsor container, and could be
    adapted to work with anything you put in the container. In this case it happens
    to be controllers but if you have a decent separation of your layers in WinForms
    then I think you could do something similar, yes."
- id: 2590
  author: Jose
  author_email: jselesan@gmail.com
  author_url: http://www.jose-selesan.com.ar
  date: !binary |-
    MjAwNy0wOS0yNSAxNjozMDo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0yNSAxNTozMDo1NyArMDEwMA==
  content: ! "Nice screencast Colin. Can you post de entire source code (I have some
    experience with MR but not with Windsor)\r\n\r\nThanks"
---
<p><a href="http://ayende.com/Blog/archive/2007/09/22/Introducing-MonoRail.HotSwap.aspx">Ayende quickly posted something called HotSwap</a>, which is a little snippet of code which uses a FileWatcher, Windsor, and on-the-fly code recompilation to increase your productivity. With ASP.NET, building your code changes causes an appdomain restart, and you will typically have to wait a few seconds for the appdomain to come back up before the browser will display your changes. This basically means that when working with ASP.NET, there are no quick code changes - you always have that four second wait till you see the effects.</p>
<p>HotSwap resolves this by building your code for you when it detects a change. Using Windsor it can swap out the old assembly containing your code and replace it with a new dynamically created assembly containing your new code - all automatically. The key advantage of this is that it's all done in-memory, and none of the DLL files in the bin directory change. This means that you won't trigger an appdomain restart and your changes can be seen almost instantly!</p>
<p>I was really impressed and excited by this approach so I did a <a title="Monorail HotSwap screencast" href="http://colinramsay.co.uk/screencasts/hotswap/">very quick screencast on the topic</a>. I was using the <a href="http://www.castleproject.org/castle/download.html">Castle RC3 MSI</a>, and created a project with Windsor integration enabled. This code only works for your controllers at the moment, but a lot of the time that'll be where you need this kind of productivity boost.</p>
<p>Ayende - cheers for <a href="http://ayende.com/Blog/archive/2007/09/22/Introducing-MonoRail.HotSwap.aspx">this</a>, and I'm sorry if I pronounced your name wrong as I've only seen it written down!</p>
<p>UPDATE: I've uploaded the <a href='http://colinramsay.co.uk/wp-content/uploads/2007/09/hotswaptest.zip' title='HotswapTest Project'>HotswapTest Project</a> from the screencast. You'll probably need the <a href="http://www.castleproject.org/castle/download.html">Castle RC3 MSI</a> installed to build it.</p>
