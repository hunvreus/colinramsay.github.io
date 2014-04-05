---
layout: post
status: publish
published: true
title: Instantiating a SolutionClass - COM Error
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 271
wordpress_url: http://www.colinramsay.co.uk/?p=271
date: !binary |-
  MjAwNS0xMC0wMiAyMTo1MzoyOCArMDEwMA==
date_gmt: !binary |-
  MjAwNS0xMC0wMiAyMTo1MzoyOCArMDEwMA==
categories:
- .NET
tags: []
comments: []
---
<p>I'm trying to address the solution class in EnvDTE.dll with this code:</p>
<blockquote><p>SolutionClass MySolution = new SolutionClass();</p></blockquote>
<p>Sensible stuff? Apparently not - I'm getting some mad COM error, specifically "COM object with clsid {B35CAA8C-77DE-4AB3-8E5A-F038E3FC6056} is either not valid or not registered". Quite how Microsoft expect me to know what the hell this means, I do not know.</p>
<p>Thanks to the power of Google, I found the solution. In .NET 1.1 you can instantiate the SolutionClass like this:</p>
<blockquote><p>System.Type type = System.Type.GetTypeFromProgID("VisualStudio.Solution.7.1");<br />
Object o = System.Activator.CreateInstance(type, true);</p>
<p>EnvDTE.Solution MySolution = (EnvDTE.Solution)o;</p></blockquote>
<p>Genius!</p>
