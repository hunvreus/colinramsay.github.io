---
layout: post
status: publish
published: true
title: Open Source Documentation
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 465
wordpress_url: http://colinramsay.co.uk/?p=465
date: !binary |-
  MjAwOC0xMS0yNCAwMDoyMTowNyArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMS0yMyAyMzoyMTowNyArMDAwMA==
categories:
- Castle
- Documentation
tags: []
comments: []
---
<p>Recently I've set up a network attached storage computer on my home network. As well as providing RAID storage for all the devices in the house, it acts as a central download server for everyone to use. Key to this strategy is <a href="http://www.sabnzbd.org/">SABnzbd</a>, a Python application which downloads binaries from newsgroups, and which sits on the server as a daemon, grabbing files on a schedule or when we ask it to. The functionality of this software is incredible, but more than that, there is a great deal of documentation for each feature directly linked from the web interface. This enabled me to set up advanced features such as RSS feeds, categorisation, and post-download scripts, in order to shift SABnzbd from being handy to indispensible.</p>
<p>This post is not about SABnzbd though - it's about documentation. My latest project has been a very quick CMS solution using Monorail, and I've been taking advantage of the new features available in Castle's trunk. The new routing in Monorail, the fluent API for component registration in Microkernel, and more new features, have all been making my life easier... once I've figured them out. I'm in awe of the people who have produced these features and I'm not adverse to digging round test cases where I can, in order to find out how to use them. </p>
<p>However, it would unarguably be better if the Castle documentation reflected these new changes. It's understandable that the documention lags behind these features, and since I don't have the intimate Castle knowledge needed to contribute to fixing bugs or adding new code, I figured it'd be good to try and work on this documentation. Castle uses an <a href="http://castleproject.org/community/getinvolved.html#documentation">XML based documentation format</a> which is just fine for final docs, but not that great for scrabbling down notes and filling out information. For that, I've decided to use the using.castleproject.org wiki, a site designed to hold tips and tricks for the Castle Project.</p>
<p>I've set up a <a href="http://using.castleproject.org/display/CASTLE/Helping+With+Documentation">simple system of tagging</a> which allows people to search out stuff in need of documentation and then tag it when it's complete. At that point, I plan on converting it into a patch for the official Castle documentation. In this way we can get the rapid prototyping of a wiki combined with an easy route to formal documentation. I think barrier for entry is a definite problem for contributing on many projects, and documentation can be a good place to start. For Castle, I'm trying to make even the barrier for entry for even that documentation very low. So if you can help out with the <a href="http://using.castleproject.org/display/MR/Routing+Overview">routing documentation</a> or the <a href="http://using.castleproject.org/display/MR/Monorail+Validation">validation documentation</a> or anything else that's missing or incomplete in the <a href="http://castleproject.org/">main Castle docs</a>, please pitch in and try and help! </p>
<p>(Also published on <a href="http://www.lostechies.com/blogs/colin_ramsay/archive/2008/11/23/open-source-documentation.aspx">my LosTechies blog</a>)</p>
