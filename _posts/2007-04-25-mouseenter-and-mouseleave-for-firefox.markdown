---
layout: post
status: publish
published: true
title: MouseEnter and MouseLeave for Firefox
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 362
wordpress_url: http://colinramsay.co.uk/2007/04/25/mouseenter-and-mouseleave-for-firefox/
date: !binary |-
  MjAwNy0wNC0yNSAxNDoyNDozOCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0yNSAxMzoyNDozOCArMDEwMA==
categories:
- Javascript
tags: []
comments: []
---
<p><a href="http://ecmascript.stchur.com/2007/03/15/mouseenter-and-mouseleave-events-for-firefox-and-other-non-ie-browsers/">stchur tackles</a> an issue which has cropped up for me in the past - that mouseout and mouseover on a container element will also trigger for its children. This can be incredibly annoying, and it surprised me to find out that Internet Explorer has a built-in solution in the mouseenter and mouseleave events. These are only triggered for the container element, not for the children. However, non-IE browsers don't support this and so <a href="http://ecmascript.stchur.com/2007/03/15/mouseenter-and-mouseleave-events-for-firefox-and-other-non-ie-browsers/">stchur made mouseenter and mouseleave for Firefox</a>. Extremely useful, and I'll be using his work as inspiration for a new feature in the next <a href="http://colinramsay.co.uk/tickertape/">TickerTape</a> version.</p>
