---
layout: post
status: publish
published: true
title: aspnet_wp.exe stopped unexpectedly and Server Application Unavailable
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 328
wordpress_url: http://www.colinramsay.co.uk/?p=328
date: !binary |-
  MjAwNi0wOC0xMSAxMjoyOTo1OCArMDEwMA==
date_gmt: !binary |-
  MjAwNi0wOC0xMSAxMjoyOTo1OCArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>In ASP.NET your app may suddenly start giving Server Application Unavailable errors and the event log will show messages such as "aspnet_wp.exe stopped unexpectedly". If this happens you may not even be able to break into your code and debug it, but it will often turn out that you have created some kind of unending loop in there:</p>
<pre>
public void DoSomething()
{
   // code
   DoSomething()
}
</pre>
<p>Yes, it's a silly mistake but such an oversight can be made, and the error messages don't really help. Hopefully this will save someone from tearing their hair out.</p>
