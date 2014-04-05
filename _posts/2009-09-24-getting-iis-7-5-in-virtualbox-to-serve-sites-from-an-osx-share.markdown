---
layout: post
status: publish
published: true
title: Getting IIS 7.5 (in VirtualBox and VMWare) to Serve Sites from an OSX Share
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 553
wordpress_url: http://colinramsay.co.uk/?p=553
date: !binary |-
  MjAwOS0wOS0yNCAwOTo1NzoxNCArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wOS0yNCAwODo1NzoxNCArMDEwMA==
categories:
- IIS
- OSX
- virtualbox
- VMWare Fusion
tags: []
comments: []
---
<p>A longwinded title, but this is mostly as a note for me. Assuming your Mac's IP address is 192.168.1.101:</p>
<ol>
<li>You need matching users with matching passwords on both Windows and OSX. So, your main user on OSX is u:colin/p:password. You need a user on Windows u:colin/p:password. Casing is important!</li>
<li>Enable SMB on OSX from File Sharing</li>
<li>Share the OSX folder you want to serve up (let's say it's named "mysite")</li>
<li>Create a new site in IIS with the physical path as \\192.168.0.101\mysite</li>
</ol>
<p>The first point is key, as is using the UNC path in the last point, rather than a mapped drive. I used <a href="http://stackoverflow.com/questions/977734/dev-environment-in-iis">this Stack Overflow question</a> to get this up and running.</p>
<p>Update: I just tried to run some unit tests via the Resharper test runner and received a security exception. The following fixed the issue:</p>
<p><code>caspol -m -ag 1 -url “file://\\192.168.0.101\mysite\*” FullTrust -exclusive on</code></p>
<p><a href="http://thebackroomtech.com/2009/04/01/using-caspolexe-to-grant-net-applications-rights-to-a-remote-network-share/">This post from backroom security tech</a> and also <a href="http://blogs.msdn.com/shawnfa/archive/2004/12/30/344554.aspx">this from .NET security blog</a> helped here.</p>
<p>Update 2: In a new VMWare VM, I came across two additional problems. Using " around the URL caused caspol to throw an error, and having spaces in the URL doesn't work - replace them with %20.</p>
<p>Update 3: In some cases, such as writing across the UNC share to the virtual directory your site is running in, you may need to set up Impersonation in the web.config with your matching user. You may additionally need to set the AppPool identity to that shared user. Note that I now have this system working in VMWare Fusion.</p>
