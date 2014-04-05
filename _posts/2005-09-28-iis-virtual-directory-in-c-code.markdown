---
layout: post
status: publish
published: true
title: IIS Virtual Directory in C# Code
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 269
wordpress_url: http://www.colinramsay.co.uk/?p=269
date: !binary |-
  MjAwNS0wOS0yOCAyMjoyNDowNSArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wOS0yOCAyMjoyNDowNSArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>Just a quick on - here's <a href="http://blogs.officezealot.com/charles/archive/2004/10/26/3191.aspx">how to create a virtual directory in IIS through C# code</a>.</p>
<p><strong>Update:</strong></p>
<p>A better/different way to do this is documented <a href="http://www.codersource.net/csharp_iis_metabase.html">here</a>. The reason I say that this could be better is that it allows access to the IIS metabase via the <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfsystemdirectoryservicesdirectoryentryclasstopic.asp">DirectoryEntry</a> object.</p>
<p>This means that I can change any of <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/iissdk/html/bb9c0d25-d003-4ddd-8adb-8662de0a24ee.asp">these metabase properties</a> on a virtual directory through C#; for example, <a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/iissdk/html/fb2fc296-4716-4717-a4ea-6c495acc6d2c.asp">which extensions map to which DLLs</a>. And that happens to be exactly what I was looking for :)</p>
