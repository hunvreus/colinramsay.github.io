---
layout: post
status: publish
published: true
title: Winforms Minimize to System Tray
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 314
wordpress_url: http://www.colinramsay.co.uk/?p=314
date: !binary |-
  MjAwNi0wNS0xOSAxNToxMTowOCArMDEwMA==
date_gmt: !binary |-
  MjAwNi0wNS0xOSAxNToxMTowOCArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>Best article I've seen on this is at <a href=": http://www.developer.com/net/csharp/article.php/3336751">developer.com</a>. When you minimize your application, it actually fires a resize event on the form, so you can attach code to the resize event to handle this:</p>
<blockquote><p>
private void Form1_Resize(object sender, System.EventArgs e)<br />
{<br />
   if (FormWindowState.Minimized == WindowState)<br />
      Hide();<br />
}
</p></blockquote>
<p>You add a NotifyIcon control to your form, and that creates the little icon on the system tray. There's a doubleclick event for that, and just handle it with this code:</p>
<blockquote><p>private void notifyIcon1_DoubleClick(object sender,<br />
                                     System.EventArgs e)<br />
{<br />
    Show();<br />
    WindowState = FormWindowState.Normal;<br />
}</p></blockquote>
<p>And there you go. Thanks to <a href=": http://www.developer.com/net/csharp/article.php/3336751">developer.com</a>.</p>
