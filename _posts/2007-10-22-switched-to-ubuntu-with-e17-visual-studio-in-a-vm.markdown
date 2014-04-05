---
layout: post
status: publish
published: true
title: Switched to Ubuntu with E17 - Visual Studio in a VM
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "When I installed Yellow Dog Linux on my PS3 the other week, I was really
  impressed with one of the window managers they make available, <a href=\"http://www.enlightenment.org/\">E17,
  the latest version of Enlightenment</a>. I wanted to test it out further on my PC,
  so after trying out a live CD with it on in a virtual machine in Windows, I eventually
  decided to test it with some applications I'd actually like to use. Here's the tale
  of how Ubuntu might actually make me switch from Windows.\r\n"
wordpress_id: 402
wordpress_url: http://colinramsay.co.uk/2007/10/22/switched-to-ubuntu-with-e17-visual-studio-in-a-vm/
date: !binary |-
  MjAwNy0xMC0yMiAwMDoxOTo1OCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0xMC0yMSAyMzoxOTo1OCArMDEwMA==
categories:
- Personal
- Linux
tags: []
comments:
- id: 4663
  author: Jason Meirdth
  author_email: jmeridth@gmail.com
  author_url: http://blog.jasonmeridth.com
  date: !binary |-
    MjAwNy0xMC0yMiAwMzoyODozMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0yMiAwMjoyODozMiArMDEwMA==
  content: Excellent find.  I hadn't heard about Wubi.
- id: 4671
  author: Sean Chambers
  author_email: dkode8@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMC0yMiAwNDozOToxNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0yMiAwMzozOToxNSArMDEwMA==
  content: ! "cool deal Colin. I remeber playing with enlightenment years ago...around
    98-99 and haven't heard about it since. Good to know it's still around.\r\n\r\ni've
    been meaning to play linux more but haven't had the time lately. I do have quite
    a few virtual machines at work though. I use VirtualBox on my work pc for redhat/ubuntu
    and a couple of other distros. We are running ubuntu in vmware for the servers
    for our subversion server along with some web servers.\r\n\r\ni really like virtual
    box. you should check it out as well."
---
<p>When I installed Yellow Dog Linux on my PS3 the other week, I was really impressed with one of the window managers they make available, <a href="http://www.enlightenment.org/">E17, the latest version of Enlightenment</a>. I wanted to test it out further on my PC, so after trying out a live CD with it on in a virtual machine in Windows, I eventually decided to test it with some applications I'd actually like to use. Here's the tale of how Ubuntu might actually make me switch from Windows.<br />
<a id="more"></a><a id="more-402"></a><br />
I wanted an easy way to get up and running with Ubuntu, and I stumbled upon something called Wubi: a Windows installer for Ubuntu. You run it in Windows and Ubuntu gets installed as a bunch of files in an existing drive and inserted as an OS choice at bootup. If you decide you don't want it any more, just use Add/Remove Programs in Windows to get rid of the whole shebang.</p>
<p>So, after waiting around for a bit while Wubi downloaded some files, and then while Ubuntu configured itself, I was away. My first target was to see if my multi-monitor setup worked, so after some Google action I turned up <a href="http://ubuntuforums.org/showthread.php?p=1773544">a thread at the Ubuntu forums</a>, which worked like a charm after a reboot.</p>
<p>From there I made sure I'd be able to work with the only Windows application I feel I really need: Visual Studio. I downloaded Parallels, which not only crashed during the installation of Windows XP, but brought down the whole machine with it. I grabbed VMWare which installed Windows perfectly, and seems pretty fast - I'm installing VS now and I'll report back any problems.</p>
<p>Finally I found another Ubuntu forums thread on <a href="http://ubuntuforums.org/showthread.php?t=546746">installing E17 from CVS</a>. This was perfect for my needs, and after about two hours of running the automated installer (which compiles E17 from source) I was able to log in to an Enlightenment session.</p>
<p>This is the most responsive experience I've had with any computer. It remains to be seen whether this is practical for me over the long-term, but right now it's working well for me and my thoughts on Ubuntu are overwhelmingly positive. I'd definitely be interested in hearing any ideas or experiences about this approach.</p>
