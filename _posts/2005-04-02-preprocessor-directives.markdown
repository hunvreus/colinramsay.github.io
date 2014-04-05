---
layout: post
status: publish
published: true
title: Preprocessor Directives
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 130
wordpress_url: http://www.colinramsay.co.uk/?p=130
date: !binary |-
  MjAwNS0wNC0wMiAyMDozMToxNCArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wNC0wMiAyMDozMToxNCArMDEwMA==
categories:
- Uncategorized
tags: []
comments: []
---
<p><a href="http://weblogs.asp.net/AvnerK/">Avner Kashtan</a> is <a href="http://weblogs.asp.net/AvnerK/archive/2005/04/02/396832.aspx">talking about</a> use of code such as this:</p>
<p><code><br />
#if (DEBUG)<br />
public<br />
#endif<br />
void Serialize(...)<br />
</code></p>
<p>He says it's useful for unit testing. Maybe so... but it's very ugly and if you were using it a lot it would make the code unreadable, and so fairly unmaintainable.</p>
