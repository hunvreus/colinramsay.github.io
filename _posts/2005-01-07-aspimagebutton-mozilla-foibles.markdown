---
layout: post
status: publish
published: true
title: ASP:ImageButton Mozilla Foibles
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 125
wordpress_url: http://www.colinramsay.co.uk/?p=125
date: !binary |-
  MjAwNS0wMS0wNyAxNDowMjo1MCArMDAwMA==
date_gmt: !binary |-
  MjAwNS0wMS0wNyAxNDowMjo1MCArMDAwMA==
categories:
- .NET
tags: []
comments: []
---
<p>If you're using an asp:imagebutton, make sure that the image you're using actually exists. If it doesn't, while IE will happily submit the form, Mozilla will not - it will just refresh the page. This means that you'll have trouble with your events.</p>
