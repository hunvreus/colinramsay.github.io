---
layout: post
status: publish
published: true
title: Council Website Fail
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 538
wordpress_url: http://colinramsay.co.uk/?p=538
date: !binary |-
  MjAwOS0wNy0yMyAxNjo0NTozOSArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wNy0yMyAxNTo0NTozOSArMDEwMA==
categories:
- Personal
- .NET
tags: []
comments: []
---
<p>My local council, Gateshead in the UK, recently had a notice on their website declaring that it would not be updated for two weeks as they were performing essential maintenance. This was WTF number one - I have no idea what happened behind the scenes to make them buy this nonsense but it smacked to me of technical incompetence. What do I know though - like I say, there could have been valid reasons for this decision and it's really not that big a deal.</p>
<p>So today I went back on their website and it seemed to be up and running with some new updates. I hit the News section to see this message:</p>
<p><code>Server Error in '/' Application.</p>
<p>Compiler Error Message: BC30569: 'New' cannot be used on a class that is declared 'MustInherit'.</p>
<p>Source Error:</p>
<p>Line 341:	DataviewObject(component).GetData<br />
Line 342:<br />
Line 343:	Dim RSSWriter As New CMS_API.WebUI.WebControls.BaseRSSFeedWriter<br />
Line 344:<br />
Line 345:	Me.Controls.Add(RSSWriter)</p>
<p>Source File: E:\websites\www.gateshead.gov.uk\Council and Democracy\news\home.aspx    Line: 343 </code></p>
<p>Ouch. This brought down the page with a bang, no decent error handling. What's the problem? It looks like someone's been trying to set up the RSS feed for that page but has used an abstract class instead of the concrete one. Fair enough, that's a simple mistake but surely WTF number two is that this could be pushed to a production server? </p>
<p>A good provider would have a local test, a staging server, and then production, at the very least. It looks to me like this change has been pushed directly to the site without any kind of quality control.</p>
<p>A possible WTF number three arises when you think again about the error message in general, which should only be shown when debug information is available. This could mean that debug settings are enabled on the web server, which is <a href="http://weblogs.asp.net/scottgu/archive/2006/04/11/442448.aspx">a definite WTF</a>. Showing any kind of information like this - such as drive names and file paths - probably isn't a very good idea.</p>
<p>I wouldn't really care if this was just some corporate website but I know that my tax has gone into the development of this system and it's painfully clear that the developers are not up to the job. Are open bidding systems in place for this kind of contract? I don't know, but I bet that even if they are they don't go on merit. Gateshead Council: shame on you. Can I get a refund? I can certainly recommend so decent software companies with local ties:</p>
<p><a href="http://www.plastiscenic.co.uk/">http://www.plastiscenic.co.uk/</a><br />
<a href="http://www.gotripod.com/">http://www.gotripod.com/</a></p>
