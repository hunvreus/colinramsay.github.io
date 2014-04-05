---
layout: post
status: publish
published: true
title: The Simplest Silverlight Example
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 366
wordpress_url: http://colinramsay.co.uk/2007/05/01/the-simplest-silverlight-example/
date: !binary |-
  MjAwNy0wNS0wMSAxNzowNjozNyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNS0wMSAxNjowNjozNyArMDEwMA==
categories:
- .NET
- Silverlight
tags: []
comments: []
---
<p>I've been doing some research on the <a href="http://blogs.msdn.com/tims/archive/2007/04/15/introducing-microsoft-silverlight.aspx">recently announced</a> <a href="http://www.microsoft.com/silverlight/">Silverlight</a> project, and I wanted to get an ultra-simple example up and running. It uses inline XAML and the silverlight.js file to present a canvas with a textarea inside, and you can find it here:</p>
<p><a href="http://colinramsay.co.uk/static/silverlight/silverlight-one.html" title="Simple Silverlight Example">Ultra-Simple Silverlight  Example</a></p>
<p>The silverlight.js file was grabbed from the quickstart examples, and is not strictly needed. You could build the HTML to include the plugin yourself, but this file handles that and all the cross-browser stuff which is needed too. Just view the source to see how it works.</p>
<p>There's one very important point to make about this file - there's no doctype declaration. I normally do include this, but doing so will <a href="http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=1146052&amp;SiteID=1">break this approach in Firefox</a>. This only happens when using inline XAML, so it's not a huge issue.</p>
