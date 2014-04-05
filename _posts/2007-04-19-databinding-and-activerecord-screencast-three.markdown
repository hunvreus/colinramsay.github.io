---
layout: post
status: publish
published: true
title: Databinding and ActiveRecord - Screencast Three
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 353
wordpress_url: http://colinramsay.co.uk/2007/04/19/databinding-and-activerecord-screencast-three/
date: !binary |-
  MjAwNy0wNC0xOSAxMjozMDo0MSArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0xOSAxMTozMDo0MSArMDEwMA==
categories:
- .NET
- Monorail
- Screencasts
tags: []
comments:
- id: 27
  author: ! 'Kevin Miller : Monorail Screencasts'
  author_email: ''
  author_url: http://blogs.dovetailsoftware.com/blogs/kmiller/archive/2007/04/20/monorail-screencasts.aspx
  date: !binary |-
    MjAwNy0wNC0yMCAyMjowOToyNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wNC0yMCAyMTowOToyNiArMDEwMA==
  content: ! '[...] Databinding and ActiveRecord&nbsp;- screencast &nbsp; [...]'
- id: 6373
  author: Loren
  author_email: lorenbland@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0xMS0xMiAwNjozMToxNSArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0xMiAwNTozMToxNSArMDAwMA==
  content: ! "Colin,\r\nIve been watching your screencasts and following along on
    my own.  Ive gotten to the point where im trying to save the user to the database.
    \ I am getting an exception (below) when user.Save(); line is executed.  Do you
    have any idea what is causing this?\r\n\r\n[AssertionFailure: null id in entry
    (don't flush the Session after an exception occurs)]\r\n   NHibernate.Impl.SessionImpl.CheckId(Object
    obj, IEntityPersister persister, Object id) +146\r\n   NHibernate.Impl.SessionImpl.FlushEntity(Object
    obj, EntityEntry entry) +220\r\n   NHibernate.Impl.SessionImpl.FlushEntities()
    +310\r\n   NHibernate.Impl.SessionImpl.FlushEverything() +168\r\n   NHibernate.Impl.SessionImpl.Flush()
    +104\r\n   Castle.ActiveRecord.Framework.SessionFactoryHolder.ReleaseSession(ISession
    session) in c:\\srcfile\\CastleProject\\trunk\\ActiveRecord\\Castle.ActiveRecord\\Framework\\SessionFactoryHolder.cs:214\r\n
    \  Castle.ActiveRecord.ActiveRecordBase.InternalSave(Object instance, Boolean
    flush) in c:\\srcfile\\CastleProject\\trunk\\ActiveRecord\\Castle.ActiveRecord\\Framework\\ActiveRecordBase.cs:540\r\n
    \  Castle.ActiveRecord.ActiveRecordBase.Save(Object instance) in c:\\srcfile\\CastleProject\\trunk\\ActiveRecord\\Castle.ActiveRecord\\Framework\\ActiveRecordBase.cs:482\r\n
    \  Castle.ActiveRecord.ActiveRecordBase.Save() in c:\\srcfile\\CastleProject\\trunk\\ActiveRecord\\Castle.ActiveRecord\\Framework\\ActiveRecordBase.cs:1232\r\n
    \  Fantasy.Controllers.AccountController.Register(User user) in c:\\Users\\Loren\\Documents\\Visual
    Studio 2005\\WebSites\\Fantasy\\Controllers\\AccountController.cs:32"
- id: 6383
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwNy0xMS0xMiAxMToyMjozMCArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0xMS0xMiAxMDoyMjozMCArMDAwMA==
  content: ! 'Loren: try debugging on user.Save and check that the values of user
    are what you''d expect...'
- id: 17145
  author: andriy
  author_email: drozzy@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMy0yMyAwNjowMjo0NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMy0yMyAwNTowMjo0NyArMDAwMA==
  content: ! "just finished watching this one.\r\nGreat stuff! Any chance of you going
    to make more?\r\nOh oh.. #4.. watching"
---
<p>The <a href="http://colinramsay.co.uk/screencasts/3/">third screencast</a> in the <a href="http://colinramsay.co.uk/category/screencasts/">series</a> talks about the Databind attribute in Monorail, which allows you to bind values to objects. I also extend the example to use ActiveRecord, and save the databound object to a database.</p>
<p><a href="http://colinramsay.co.uk/screencasts/3/">http://colinramsay.co.uk/screencasts/3/</a></p>
<p>It begins to highlight some of the more advanced uses of Monorail, and introduces the Castle implementation of the <a href="http://en.wikipedia.org/wiki/Active_record">Active Record pattern</a>. In the next screencast, I'll be consolidating on the topics I've covered so far and address some of the real work problems which Monorail can easily solve.</p>
<p>One point of relevance: the use of ActiveRecord with Monorail is <strong>completely optional</strong>. I've used it here because I feel they integrate well, but if you've got another persistance framework which you'd prefer to use then that's possible too!</p>
<p>Don't forget to watch <a href="http://colinramsay.co.uk/2007/04/17/getting-started-with-monorail-screencast-one/">Getting Started with Monorail</a> and <a href="http://colinramsay.co.uk/2007/04/18/using-monorail-screencast-two/">Using Monorail</a>, the first two screencasts in the <a href="http://colinramsay.co.uk/category/screencasts/">series</a>.</p>
