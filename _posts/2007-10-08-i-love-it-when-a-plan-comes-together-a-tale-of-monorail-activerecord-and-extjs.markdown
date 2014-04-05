---
layout: post
status: publish
published: true
title: I love it when a plan comes together (a tale of Monorail, ActiveRecord and
  ExtJS)
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 377
wordpress_url: http://colinramsay.co.uk/2007/10/08/i-love-it-when-a-plan-comes-together-a-tale-of-monorail-activerecord-and-extjs/
date: !binary |-
  MjAwNy0xMC0wOCAyMzoxMDoxMCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0xMC0wOCAyMjoxMDoxMCArMDEwMA==
categories:
- .NET
- Ajax
- Monorail
- Screencasts
- C#
- Javascript
- JSON
- Castle
tags: []
comments:
- id: 3729
  author: Sean Chambers
  author_email: dkode8@gmail.com
  author_url: http://www.lostechies.com/blogs/sean_chambers
  date: !binary |-
    MjAwNy0xMC0wOCAyMzo1NDo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0wOCAyMjo1NDo1NSArMDEwMA==
  content: ! "great introduction colin! I need to get up to speed on the ActiveRecord
    stuff.\r\n\r\ni laughed when you started doing the sorting and you said, \"ohh,
    thats brilliant!\"\r\n\r\nrofl"
- id: 3733
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwNy0xMC0wOCAyMzo1NjoyOCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0wOCAyMjo1NjoyOCArMDEwMA==
  content: haha, everytime I play with ExtJS I come out with new superlatives!
- id: 4000
  author: Ruprict
  author_email: glenn@goodrichs.net
  author_url: ''
  date: !binary |-
    MjAwNy0xMC0xMiAxOToxMzoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xMiAxODoxMzoyMyArMDEwMA==
  content: ! "Colin,\r\n\r\nSo, have you tried teh JSONHelper stuff with an ActiveRecord
    model that has relationships?  I get a \"Self referencing loop\" error, and can't
    find much with a google on how to get around it.\r\n\r\nThe screencast was great.
    \ Thanks, mate."
- id: 4031
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwNy0xMC0xMyAwMDozNDo0NiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xMiAyMzozNDo0NiArMDEwMA==
  content: Rupert, there's a property that you can configure to define the behaviour
    when dealing with self-referencing loops, look at Newtonsoft.Json.ReferenceLoopHandling.
    Failing that, look at the property that is triggering the error and add the JsonIgnore
    attribute and that will solve it.
- id: 4472
  author: Donal
  author_email: donal.conlon@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMC0yMCAwNDoyNjowNyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0yMCAwMzoyNjowNyArMDEwMA==
  content: ! "Looks great.\r\nI'm curious about Castle, but thought LINQ would negate
    the need for Castle.  Can you explain?\r\nHave you tried using LINQ with extjs?\r\nAnd
    finally, how would this work for data that requires athentication?\r\n\r\nthanks!"
- id: 4484
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwNy0xMC0yMCAxMDozNTozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0yMCAwOTozNTozNSArMDEwMA==
  content: ! "LINQ is Language Integrated Query and is basically a querying syntax
    using new keywords. You could use LINQ to SQL to replace the ActiveRecord portion
    of my sample, and probably C# 3.0's new anonymous types to help with the JSON
    (a bit):\r\n\r\nhttp://colinramsay.co.uk/2007/05/08/working-with-json-and-c-30/\r\n\r\nBut
    neither of these are replacements for Castle. Working with LINQ for SQL and ExtJS
    should be pretty simple, it's just another means of querying the DB.\r\n\r\nIf
    you want authentication, well the monorail actions which are building the JSON
    have full access to the session and cookie data so you could use an MR filter
    to exclude access to unauthenticated users, or something like the PrincipalPermission
    attribute. More info on both here:\r\n\r\nhttp://www.castleproject.org/monorail/documentation/trunk/usersguide/authentication.html\r\n\r\nThat's
    a pretty common usecase in Monorail and is straightforward to implement."
- id: 5128
  author: Jay
  author_email: silentjay37@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMC0yNiAxODo0OToyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0yNiAxNzo0OToyMyArMDEwMA==
  content: Could you post the source code for this screencast?
- id: 5910
  author: Tim Mather
  author_email: tim@chocolategrape.co.uk
  author_url: http://www.chocolategrape.co.uk
  date: !binary |-
    MjAwNy0xMS0wNSAwOTo0MDo1MCArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNSAwODo0MDo1MCArMDAwMA==
  content: Looks great, I've got to get looking into the ActiveRecord stuff.
- id: 5919
  author: RL
  author_email: rjlopes@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wNSAxMzozOToxNyArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNSAxMjozOToxNyArMDAwMA==
  content: ! "Nice screencast, while i was researching a little for ExtJs i found
    out ExtSharp, how you tried this? it really looks better than handwritting all
    that JS.\r\n\r\nhttp://code.google.com/p/extsharp/\r\n\r\nAnyone tried this and
    can give any feedback???"
- id: 5922
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwNy0xMS0wNSAxNDowMjozMiArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNSAxMzowMjozMiArMDAwMA==
  content: ! "RL:\r\n\r\nI've tried ExtSharp, and I'm not keen. I had to uninstall
    it as it broke my visual studio (I can't remember exactly what happened), but
    even when I had it I saw it as nothing more than a curiosity.\r\n\r\nI really
    like JS, and I see little value in providing a layer on to of it which does nothing
    other than translating to it.\r\n\r\nIf you want to use *ExtJS* then you need
    to get into the guts of javascript to understand and use it correctly, otherwise
    you're going to hit problems.\r\n\r\nWhen you say it looks better than handwriting
    the JS, well, you're still going to be handwriting the C#, but as a web developer
    you should be fully versed in javascript and comfortable with writing, debugging
    and understanding it.\r\n\r\nThe main draw for ExtSharp for me was the intellisense
    and suchlike, which would be great. Potentially Aptana could do this for the JS,
    but I've not seen it working."
- id: 5936
  author: nate bates
  author_email: natebates@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0wNSAyMDo1MDoxMyArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNSAxOTo1MDoxMyArMDAwMA==
  content: ! "great screencast.\r\n\r\ni think you have a bug at the end of it, though.\r\n\r\nfor
    your character-filtered dataset, when you add  \"totalRecords = accounts.Length;\"
    (at around 21:00)  that would still only return a max of 8, right?  so you should
    really run another query with only the 'like' criteria, not the sort, start or
    limit."
- id: 5937
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwNy0xMS0wNSAyMToyMjoxNyArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0wNSAyMDoyMjoxNyArMDAwMA==
  content: ! "nate:\r\n\r\nYeah, looks like you're right. That's what I get for not
    planning better. I do actually catch a similar thing in the unfiltered case (when
    I do totalRecords = Account.FindAll().Length) so I'm not sure why I didn't see
    it when filtering."
- id: 7044
  author: RL
  author_email: rjlopes@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0xOSAxNTozMzo1NSArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0xOSAxNDozMzo1NSArMDAwMA==
  content: ! 'Colin: I know you have to understand JS, that was never in cause, however
    the thing a find interesting is to be able to write in on C# and have those fantastics
    things like (Code completition, refactoring and compilation errors :-] ) that
    _should_ save you some time and avoid stupid errors that make you spen time. Besides
    that is totaly useless.'
- id: 9862
  author: Screencast goodness &laquo; How to become a better developer
  author_email: ''
  author_url: http://sebastienlachance.com/2007/12/24/screencast-goodness/
  date: !binary |-
    MjAwNy0xMi0yNCAxNToxOToxMSArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMi0yNCAxNDoxOToxMSArMDAwMA==
  content: ! '[...] ExtJS (a grid) [...]'
- id: 14322
  author: Biren
  author_email: basab.maulik@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMi0xMSAwOTowOTowMyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMSAwODowOTowMyArMDAwMA==
  content: ! "You should take a look at this post from Jack. I am using the Spket
    editor with Aptana and the help is good.\r\n\r\nhttp://extjs.com/blog/2008/02/01/ides-plugins-and-tools-for-ext-js-20/"
- id: 18705
  author: Sunshine
  author_email: sunwpk@yahoo.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0xOCAxMjozNToxNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xOCAxMTozNToxNyArMDEwMA==
  content: ! "Hi I am new to Extjs framework. I am a C# .net programmer. How can i
    bind data to extjs grids and update and save etc\r\nthat data back to my database??\r\n\r\nPlease
    if you can show me some vedios or help me \r\nThanks in Advance"
- id: 20129
  author: Kevin
  author_email: kevin@kineticmedia.net
  author_url: http://www.rumpmonkey.com
  date: !binary |-
    MjAwOC0wNS0yMyAyMTo0Mjo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNS0yMyAyMDo0Mjo0NCArMDEwMA==
  content: ! "Can you please post the source code.  the link does not seem to be working.\r\n\r\nThanks!"
- id: 22396
  author: Li
  author_email: liz.xin@gmail.com
  author_url: http://www.latticesoft.com
  date: !binary |-
    MjAwOC0wOS0yMiAyMDoxMzoyOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOS0yMiAxOToxMzoyOSArMDEwMA==
  content: ! "We have templates available for generating ExtJS + Castle MonoRail MVC
    + ActiveRecord application using LatticeFramework Studio, the following screencast
    shows how to use it:\r\n\r\nhttp://www.latticesoft.com/product/video.aspx\r\n\r\nMonoRail
    layout, view, models and controllers can be generated, also you can modify the
    xslt stylesheets to generate the code you want.\r\n\r\nHere is the screenshot
    of generated application:\r\nhttp://www.latticesoft.com/product/screenshot/ExtJSMonoRail.JPG"
- id: 22584
  author: Bull
  author_email: asfsdf@sasd.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMC0xMiAwMDowMzowMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0xMC0xMSAyMzowMzowMSArMDEwMA==
  content: why would anyone use this component and this approach to have ajax grid?
    for god sakes you have 4 major component vandors that lats you build the same
    funcionality with writing 5% of the code here. are you nuts?
---
<p>I've <a href="http://colinramsay.co.uk/category/castle/">blogged before about the enabling features of Monorail and Active Record</a>, part of the <a href="http://www.castleproject.org">Castle</a> stack. Another piece of software which is making my development life a pleasure is <a href="http://extjs.com">ExtJS</a> - a collection of javascript goodies created by Jack Slocum and his team - and when these three things come together, watch that coding fly.... I've <a href="http://colinramsay.co.uk/screencasts/mr-ext1/">created a screencast</a> in which I demonstrate how easy it is to build a paging, sorting, filtering, AJAX-powered grid using ExtJS and Castle, and you can <a href="http://colinramsay.co.uk/screencasts/mr-ext1/">watch it here</a>. It's 20 minutes long but filled with goodness - and a couple of hacks (forgive me :). Don't forget to check out all my <a href="http://colinramsay.co.uk/category/screencasts/">past screencasts</a> too.</p>
<p>UPDATE: As requested in the comments, you can <a href='http://colinramsay.co.uk/diary/2007/10/08/i-love-it-when-a-plan-comes-together-a-tale-of-monorail-activerecord-and-extjs/monorailext1-vs-project/' rel='attachment wp-att-404' title='MonorailExt1 VS Project'>MonorailExt1 VS Project</a> directory of this.</p>
