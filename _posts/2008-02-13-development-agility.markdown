---
layout: post
status: publish
published: true
title: Development Agility
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 415
wordpress_url: http://colinramsay.co.uk/2008/02/13/development-agility/
date: !binary |-
  MjAwOC0wMi0xMyAwMTowOTozMiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMi0xMyAwMDowOTozMiArMDAwMA==
categories:
- .NET
- C#
- Castle
- NHibernate
tags: []
comments:
- id: 14520
  author: Filip Kinsky
  author_email: filip@filovo.net
  author_url: http://filovo.net
  date: !binary |-
    MjAwOC0wMi0xMyAwODo1MTozNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMyAwNzo1MTozNiArMDAwMA==
  content: ! "maybe the Migrator.Net (http://code.google.com/p/migratordotnet/) for
    DB schema evolution control?\r\n\r\nbtw are you going to use trunk version of
    MR or the RC3? maybe it would be efficient to use the IController-enabled version
    from the start to be MS MVC compatible..\r\n\r\nI must admit I like your dev stack
    - ExtJS + AR + MR is a great combination. the only feature I miss here is some
    richer support for client side validation when using ExtJS grid for editing etc.
    Or do you have any suggestions on this?"
- id: 14528
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wMi0xMyAxMDo0Nzo0NiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMyAwOTo0Nzo0NiArMDAwMA==
  content: ! "I'll probably still use RC3, at least I can standardise on that release.
    If there was a newer release I'd definitely use that.\r\n\r\nIf by client side
    validation you mean form validation then ExtJS has very strong support for this
    in the Ext.forms namespace."
- id: 14533
  author: Filip Kinsky
  author_email: filip@filovo.net
  author_url: http://filovo.net
  date: !binary |-
    MjAwOC0wMi0xMyAxMTo1MDoxNCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMyAxMDo1MDoxNCArMDAwMA==
  content: I know that ExtJS has support for validation of input fields and use it
    frequently, but I mean some connection between business objects validation and
    client side ExtJS validation like MR has for ActiveRecordValidation-based BO...
- id: 14535
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wMi0xMyAxMTo1ODoyNSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMyAxMDo1ODoyNSArMDAwMA==
  content: Ah I see what you mean, sorry. That's an interesting point, and something
    I think I could use in this upcoming project. I'll have a think.
---
<p>I'm starting work on a new project on Monday and I've got full control of all development aspects. With that in mind, I've been thinking of how I can get to beta status as quickly as possible - finish main development and get to the stage where the client is reviewing minor details. This is dependant on a combination of my skillset and the tools I'm going to use. I've got:</p>
<ul>
<li>Existing Plastiscenic.Commons code and project structure for quick setup</li>
<li>C# 3.0 to remove some boiler plate code (automatic properties for example)</li>
<li>Monorail to develop with fewer LOC in the main app</li>
<li>NHibernate for low friction database work</li>
<li>ExtJS for rich backend</li>
<li>Strong cross-technology skills to integrate the above</li>
</ul>
<p>Are there any additions to this that you use to accelerate the development process?</p>
