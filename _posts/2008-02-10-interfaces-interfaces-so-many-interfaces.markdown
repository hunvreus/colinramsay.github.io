---
layout: post
status: publish
published: true
title: Interfaces, Interfaces... So Many Interfaces!
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 414
wordpress_url: http://colinramsay.co.uk/2008/02/10/interfaces-interfaces-so-many-interfaces/
date: !binary |-
  MjAwOC0wMi0xMCAyMjoyMDo0MyArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMi0xMCAyMToyMDo0MyArMDAwMA==
categories:
- C#
- Windsor
tags: []
comments:
- id: 14303
  author: Joey Beninghove
  author_email: joeybeninghove@gmail.com
  author_url: http://joeydotnet.com/blog
  date: !binary |-
    MjAwOC0wMi0xMSAwMzoxNjoyOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMSAwMjoxNjoyOSArMDAwMA==
  content: ! "I know what you mean.  I'm definitely guilty of interface-itis myself.
    \ But then again, I usually justify it by saying \"interfaces are cheap\".  But
    I can't count the number of times that by having an interface for a particular
    class it has allowed me to extend the systems I work on and more closely follow
    OCP.  And I don't think that's a bad thing.  \r\n\r\nI am still learning how to
    balance things a bit more to be a bit more pragmatic.  Always learning...  *sigh*"
- id: 14330
  author: Lee Henson
  author_email: lee.m.henson@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMi0xMSAxMjoxMDo1OSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMSAxMToxMDo1OSArMDAwMA==
  content: AspView doesn't *require* you to use interfaces. I'm assuming you are referring
    to TypedPropertyBag etc? You can still use Properties["username"] if you reallllly
    wanted to work with string literals and without intellisense.
- id: 14331
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wMi0xMSAxMjoxMjo1MiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMi0xMSAxMToxMjo1MiArMDAwMA==
  content: Oh I realise that Lee, but one of the reasons I did investigate AspView
    is because I wanted to use the strongly typed property bag. It's swings and roundabouts
    really - there are up sides and down sides to this approach.
---
<p>Having been delving into the world of IoC, SoC and TDD, I find myself extracting an interface more and more often. A little too often... I have quite a few interfaces that exist as nothing more than a crutch. And now using <a href="http://www.aspview.com/">AspView</a> I have even more! Where will this madness end!</p>
