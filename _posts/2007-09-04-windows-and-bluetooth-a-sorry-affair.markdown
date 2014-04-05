---
layout: post
status: publish
published: true
title: Windows and Bluetooth - a Sorry Affair
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "Cameras on mobile phones have reached such a ridiculous level of technology
  that you can get decent shots from them, decent enough that you'd actually want
  to keep. I was flicking through the ones I had stored on my Samsung d900 and realised
  there were a fair few I didn't want to risk losing in a phone \"incident\", and
  so I went exploring for a technical solution...\r\n\r\n"
wordpress_id: 382
wordpress_url: http://colinramsay.co.uk/2007/09/04/windows-and-bluetooth-a-sorry-affair/
date: !binary |-
  MjAwNy0wOS0wNCAxODoxNzoyMCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOS0wNCAxNzoxNzoyMCArMDEwMA==
categories:
- Projects
- C#
- Bluetooth
- Windows
tags: []
comments: []
---
<p>Cameras on mobile phones have reached such a ridiculous level of technology that you can get decent shots from them, decent enough that you'd actually want to keep. I was flicking through the ones I had stored on my Samsung d900 and realised there were a fair few I didn't want to risk losing in a phone "incident", and so I went exploring for a technical solution...</p>
<p><a id="more"></a><a id="more-382"></a></p>
<p><strong>The Solution</strong></p>
<p>This wasn't a major problem, so I wasn't after a very complex solution. Every time I got within range of my computer, I'd want it to copy the photos on my phone to <a href="http://www.flickr.com/" title="Flickr">Flickr</a>. Now that's not rocket science, is it?</p>
<p><strong>Attempt One - Off The Shelf</strong></p>
<p>So I assumed that there would be at least one person in the entire world who would want to do this. Nope. I couldn't find a single application that does this. A lot of phones come with sync software but that mostly just does your contacts. <a href="http://www.salling.com/Clicker/windows/" title="Salling Clicker for Windows">Salling Clicker</a> is an application which can respond to Bluetooth events (as well as sporting some other tasty features), so that handles the proximity stuff, but it doesn't have anything built in to allow Bluetooth transfers and suchlike. Time to start flexing the coding muscles.</p>
<p><strong>Attempt Two - Device Notifications</strong></p>
<p>I had my first foray into the world of the Win32 API with this attempt - I assumed that when a Bluetooth device comes in range there would be some kind of notification to Windows to say "HEY I'M HERE", but sadly this isn't the case. Bluetooth doesn't seem to have any kind of "ping" concept to register when something becomes unavailable, so the only way of actually knowing whether a device is connected or not is to periodically try and connect to it. The Win32 API attempt was interesting but I realised it wasn't going to provide me with an easy solution and so I moved on.</p>
<p><strong>Attempt Three - A Hybrid</strong></p>
<p><a href="http://dev.zuckschwerdt.org/openobex/wiki/ObexFtp">Obex FTP</a> is a command line exe which allows you to connect to OBEX compatible devices. Most phones will be OBEX compatible, so I figured that using this could give me what I needed rather than having to write something from scratch. I could write a console application which would try to connect to my phone and download the photos using <a href="http://dev.zuckschwerdt.org/openobex/wiki/ObexFtp">Obex FTP</a>. Long story short, it seemed to work, but every photo which it downloaded from my phone was corrupt and garbled. I have no idea why this is but no-one else seems to have experienced the problem. I accepted the fact I was cursed and moved on.</p>
<p><strong>Attempt Four - Libraries</strong></p>
<p>Rather than using a external cross-platform program to perform my whims, I set out looking for a proper solution which I could call directly from my code. I finally stumbled across <a href="http://32feet.net/">32Feet.NET</a> which is "a shared source .NET library for Personal Area Networking via Bluetooth and IrDA for a range of Windows platforms", and using the downloads available there (actually a combination of the 32Feet stuff and the Brecham.Obex Beta 3 release) I was able to work with Bluetooth in a fairly decent way.</p>
<p><strong>Conclusion</strong></p>
<p>I couldn't find anything that did what I wanted off the shelf, which is pretty disappointing considering it seems to be pretty easy on the Mac. The only solution is going to be to roll my own, which is something I don't have much time for. I have done a lot of the groundwork now though, and the <a href="http://32feet.net/">32Feet project</a> is currently my recommended angle of approach.</p>
