---
layout: post
status: publish
published: true
title: MS vs MS - Who Gets the Web?
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 218
wordpress_url: http://www.colinramsay.co.uk/?p=218
date: !binary |-
  MjAwNS0wNi0xMiAxOTowNzoyOCArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wNi0xMiAxOTowNzoyOCArMDEwMA==
categories:
- Uncategorized
tags: []
comments:
- id: 13
  author: Dare Obasanjo
  author_email: kpako@yahoo.com
  author_url: http://www.25hoursaday.com/weblog
  date: !binary |-
    MjAwNS0wNi0xMiAyMzozODo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAwNS0wNi0xMiAyMzozODo0OSArMDEwMA==
  content: I work at MSN. I left the XML team about 8 months ago.
- id: 14
  author: Colin Ramsay
  author_email: webmaster@happyandlost.co.uk
  author_url: http://www.colinramsay.co.uk
  date: !binary |-
    MjAwNS0wNi0xMyAwNzoxNTowOSArMDEwMA==
  date_gmt: !binary |-
    MjAwNS0wNi0xMyAwNzoxNTowOSArMDEwMA==
  content: Corrected. Sorry about that, thanks for letting me know.
- id: 15
  author: William Luu
  author_email: will_luu@optusnet.com.au
  author_url: http://will.id.au/blog
  date: !binary |-
    MjAwNS0wNi0xNCAwNDozMjoxNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNS0wNi0xNCAwNDozMjoxNiArMDEwMA==
  content: ! "Colin, one thing with ASP.NET 2.0 is it's probably been in development
    for quite some time now. Prior to all this buzz about AJAX came about.\n\nSure,
    they have something they call ClientScript Callback (http://msdn2.microsoft.com/library/ms178208(en-us,vs.80).aspx)
    which utilises XmlHttp Request, but it is a different implementation to say the
    Ajax.NET library (http://ajax.schwarz-interactive.de) which seems the easiest
    to use for ASP.NET developers.\n\nAnd yes, I know XmlHttp Request has been available
    for quite sometime now. \n\nI wouldn't say they are totally out of the loop, but
    due to their release cycles, web developers utilising ASP.NET won't be able to
    use the .NET framework for implementing AJAX out of the box. \n\nI would love
    it if the out of box controls had the option where the developer can choose to
    either use the postback model or use xmlhttp request.\n\nAlso, have a look at
    the MDSN Product Feedback Center: http://lab.msdn.microsoft.com/productfeedback/viewfeedback.aspx?feedbackid=9c2b3819-4ab0-4435-8ece-f25118056278\n\nWhich
    basically states that the product team are aware of Ajax and its' recent popularity,
    but due to where they are currently at in the product cycle that it's not possible
    for them to add the AJAX features to ASP.NET 2.0. \n\nGuess we can only hope that
    ASP.NET 3.0 \"might\" offer AJAX out of the box. In the mean time though, developers
    will have to make do on their own."
- id: 16
  author: Colin Ramsay
  author_email: webmaster@happyandlost.co.uk
  author_url: http://www.colinramsay.co.uk
  date: !binary |-
    MjAwNS0wNi0xNCAxOTo1MToxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwNS0wNi0xNCAxOTo1MToxMCArMDEwMA==
  content: ! 'Ouch, your comment has really shown up formatting...


    But you''re right. Microsoft''s biggest enemy in this is it''s lengthy development
    cycle. Ajax is a prime example; this has only really come to the fore in the past
    nine months or so.


    But there are other things that make me wary of the MS approach to the web. Straightforward
    hyperlinks that rely on datagrids. Viewstate that increases the page the client
    receives by 100kb. An excessive eventing model.


    They''ve tried to bring their desktop strategy to the web, and that''s never gonna
    work.'
- id: 17
  author: William Luu
  author_email: will@will.id.au
  author_url: http://will.id.au/blog
  date: !binary |-
    MjAwNS0wNi0xNSAwMjo1NzoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNS0wNi0xNSAwMjo1NzoxMiArMDEwMA==
  content: ! "I guess their strategy was to make the experience seemless between developing
    for Windows and the Web. (So developers for one can easily switch over to developing
    using the other... All part of their \".NET\" framework.)\n\nIf you don't want
    to use ViewState, you don't have to. Per page, you can set the EnableViewState
    page property to false and that will disable View State.\n\nI disable ViewState
    when it's not needed in my apps. I only enable it on a few of my pages when I
    find it to be useful.\n\nThe problem is that it is too easy to develop the same
    way when going between WebForms and WinForms development. \n\nWith .NET it is
    entirely possible to produce a fully functioning web site without using the ASP.NET
    Web Controls which causes that overhead that you mention.\n\nHave a look at something
    called MonoRail (http://www.castleproject.org/index.php/MonoRail) which was formerly
    known as Castle on Rails.\n\nI haven't used MonoRail before, but I've had it demoed
    to me recently. (Oh, and there is builtin support for Ajax in MonoRail). It looks
    interesting, and is another approach to web development using C# based upon Ruby
    on Rails (http://www.rubyonrails.org)\n\nMy point though is, even if MS doesn't
    get it, someone out there who does can utilise the framework, extend it, and build
    on top of it. The open source world is much more able to respond to these new
    \"trends\" quicker than Microsoft's dev cycles. \n\nIn the end, the developer
    is in control, if they are not happy with the MS approach, build your own, and
    go on from there. All you need to do is built your own HttpHandlers (see: http://mikeroberts.thoughtworks.net/blog/archive/Tech/dotNet/GoodbyeWebForms.html).\n\n(sorry
    about messing up your blogs' formatting)"
- id: 18
  author: Colin Ramsay
  author_email: webmaster@happyandlost.co.uk
  author_url: http://www.colinramsay.co.uk
  date: !binary |-
    MjAwNS0wNi0xNSAyMjoyMjo0OCArMDEwMA==
  date_gmt: !binary |-
    MjAwNS0wNi0xNSAyMjoyMjo0OCArMDEwMA==
  content: ! 'Good point. I have read about people disposing of the whole webforms
    layer and working with    their own UI stuff. It makes sense if you''re aiming
    for high-performance.


    The thing is that most web-apps are not targetted for ultra-high performance scenarios.
    In those cases I think that other low investment frameworks can be a better route
    than .NET.


    Castle on Rails is an example of people "not getting it". The idea of Ruby on
    Rails is that you can take advantage of their cool stuff with ease. Castle on
    Rails has a slightly more complicated interface to slightly less cool stuff -
    it''s a replication of existing tech but done in a less sexy way.


    I do totally agree with you when you say that .NET is a very flexible framework.
    I just feel that you could put a lot of time into it when existing tech does the
    job a lot better with a smaller investment.'
- id: 19
  author: William Luu
  author_email: will@will.id.au
  author_url: http://will.id.au/blog
  date: !binary |-
    MjAwNS0wNi0yOCAxMjowNTo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwNS0wNi0yOCAxMjowNTo0NyArMDEwMA==
  content: ! 'Colin, thought you might be interested in what''s in this article: http://news.com.com/Microsoft+gets+hip+to+AJAX/2100-1007_3-5765197.html

'
---
<p>Dare Obasanjo makes an <a href="http://www.25hoursaday.com/weblog/PermaLink.aspx?guid=8beba229-33e1-4187-bb16-bffe472acdb4">interesting point</a> about comments made by MS employees regarding Ajax and how it ties in with XAML/Winforms (clue: it doesn't). Dare works <span style="text-decoration:line-through;">with the XML program at Microsoft</span> as program manager on the Contacts & Storage team at MSN.</p>
<p>It echoes what I've been thinking recently - Microsoft are out of the loop on the web, and in development on the web. I think ASP.NET 2.0 will make things worse, not better.</p>
