---
layout: post
status: publish
published: true
title: Samba Read Write Share
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 119
wordpress_url: http://www.colinramsay.co.uk/?p=119
date: !binary |-
  MjAwNC0xMS0wMiAyMjo1Mjo1OCArMDAwMA==
date_gmt: !binary |-
  MjAwNC0xMS0wMiAyMjo1Mjo1OCArMDAwMA==
categories:
- Site Stuff
tags: []
comments: []
---
<p>Managed to get a Samba share running on my server such that it can be accessed from my main Windows PC. This is great. I can edit files on my server as if it was another directory on my main PC. I've used this to make every page on here one again CSS/XHTML. I think it was like this a long time ago, but some horrible crash wiped it out.</p>
<p>For those interested, my Samba config is like this:</p>
<blockquote><p>
[global]<br />
     netbios name = LinuxServer<br />
     workgroup = KENMORE<br />
     security = share<br />
[share]<br />
        path = /var/www/html/<br />
        comment = Share<br />
        force user = root<br />
        force group = root<br />
        guest ok = Yes<br />
        read only = No
</p></blockquote>
<p>Share is the name of the... well, the share. It's just a label so it could be anything. Along with the netbios name, it means my share is accessed through "\\Linuxserver\share\". The user is forced to root, which is very very bad, I know. Still, it works for my botched server. "Guest ok" lets me log in as anon and "read only" along with a user with write permissions (i.e. root) lets me change rather than just view files. Samba is great.</p>
