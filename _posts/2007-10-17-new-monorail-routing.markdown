---
layout: post
status: publish
published: true
title: New Monorail Routing
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 400
wordpress_url: http://colinramsay.co.uk/2007/10/17/new-monorail-routing/
date: !binary |-
  MjAwNy0xMC0xNyAxMjowODoyNyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0xMC0xNyAxMTowODoyNyArMDEwMA==
categories:
- Uncategorized
tags: []
comments:
- id: 4336
  author: Routing from ASP.NET MVC inspires MonoRail - J.D. Meridth
  author_email: ''
  author_url: http://www.lostechies.com/blogs/jason_meridth/archive/2007/10/16/routing-from-asp-net-mvc-inspires-monorail.aspx
  date: !binary |-
    MjAwNy0xMC0xNyAxODoxODozMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xNyAxNzoxODozMiArMDEwMA==
  content: ! '[...] UPDATE: Colin gives more insight into the code change here. [...]'
- id: 13027
  author: Omer Rauchwerger
  author_email: omer@rauchy.net
  author_url: http://www.rauchy.net
  date: !binary |-
    MjAwOC0wMS0zMCAxNjoxODozNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0zMCAxNToxODozNiArMDAwMA==
  content: ! "Funny to see Monorail inspired from ASP.NET MVC and not the other way
    around.\r\n\r\nActually it makes sense, competition is a positive thing indeed.\r\n\r\n--
    rauchy"
---
<p><a href="http://www.lostechies.com/blogs/jason_meridth/archive/2007/10/16/routing-from-asp-net-mvc-inspires-monorail.aspx">Jason alerted me</a> to an <a href="http://builds.castleproject.org/cruise/ViewSpecific.castle?name=CastleProject&amp;log=log20071017002115Lbuild.586.xml&amp;detail=Modifications">SVN commit</a> by <a href="http://hammett.castleproject.org/">Hammett</a> which begins to introduce a new style of routing support into Monorail. The commit message says that he &quot;Added RoutingEngine, initial work to create a cooler routing support inspired on MS MVC&quot;, and by looking at the test case for this new engine, it does indeed look cooler.</p>
<p>To add a rule:</p>
<p>  <code>
<pre>routingEngine.Add(PatternRule.Build(&quot;ProductByName&quot;, &quot;product/&lt;name&gt;&quot;, typeof(ProductController), &quot;View&quot;));</pre>
<p></code></p>
<p>Which will match the URL <a href="http://www.domain.com/product/iPod">http://www.domain.com/product/iPod</a> and send it to the view action on the product controller, passing in &quot;iPod&quot; as the name parameter. It's also naming the route as &quot;ProductByName&quot; but I'm not sure of the application of this right now...</p>
<p>The thing I like about this approach is that it's a lot more readable than the current routing engine. It's not going to set the world on fire but this, coupled with RC3's new UrlBuilder, will make for a pain-free means of manipulating your URLs.</p>
