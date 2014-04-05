---
layout: post
status: publish
published: true
title: Resizing a VirtualBox VDI Hard Disk
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 550
wordpress_url: http://colinramsay.co.uk/diary/2009/08/01/resizing-a-virtualbox-vdi-hard-disk/
date: !binary |-
  MjAwOS0wOC0wMSAxNjo1MDowNiArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wOC0wMSAxNTo1MDowNiArMDEwMA==
categories:
- Uncategorized
tags:
- virtualbox
comments: []
---
<p>Start off by creating a fresh new drive of the size you're after using the VirtualBox user interface. Then, locate both the your old, smaller HD and the new, larger one and run the following command:</p>
<p><code>VBoxManage clonehd --existing oldhd.vdi newhd.vdi</code></p>
<p>After some progress indicators ahve come and gone your HD should have been cloned to the larger one. You now need to use some software to expand your drive partition into the new space. Vista and W7 have this feature built in to Disk Management, or you could use something like GParted.</p>
