---
layout: post
status: publish
published: true
title: ASP.NET Postback Problems in Controls
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 75
wordpress_url: http://www.colinramsay.co.uk/?p=75
date: !binary |-
  MjAwNC0wNC0yMCAyMjowMjo1MCArMDEwMA==
date_gmt: !binary |-
  MjAwNC0wNC0yMCAyMjowMjo1MCArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>There are some people hitting this site when searching for <a href="http://www.google.com/search?&q=asp.net%20postback">ASP.NET postback</a> - here's another solution I found.</p>
<p>A User Control is ASP.NET consists of a .ascx file and an optional .cs file. If you try and dynamically create something like a DataGrid in a User Control, you'll be screwed - your DataGrid buttons won't work. I've not yet found the exact reason for this, but I did find a workaround.</p>
<p>Use a Custom Control. A custom control is a control which you create in a .cs file and then compile into a .dll. You can then reference this in your pages as you would a user control. The disadvantage is that you have no .ascx file - you don't have that templating which they provide... unless you include a Custom Control within a User Control :o</p>
