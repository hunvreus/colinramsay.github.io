---
layout: post
status: publish
published: true
title: Code Metrics - Controller Methods
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 403
wordpress_url: http://colinramsay.co.uk/2007/10/22/code-metrics-controller-methods/
date: !binary |-
  MjAwNy0xMC0yMiAxMzowMzo1NCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0xMC0yMiAxMjowMzo1NCArMDEwMA==
categories:
- Code Metrics
tags: []
comments:
- id: 4746
  author: Sean Chambers
  author_email: dkode8@gmail.com
  author_url: http://www.lostechies.com/blogs/sean_chambers/
  date: !binary |-
    MjAwNy0xMC0yMiAyMzoyOTo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0yMiAyMjoyOTo1MyArMDEwMA==
  content: ! "Good question Colin,\r\n\r\nI was faced with this today, but instead
    of the main method being 30 lines it was about 60 lines. although it made no private
    method calls. I knew I had to break up the method into smaller pieces sooner or
    later but I was waiting to refactor an entity into smaller seperate entities to
    perform this refactoring.\r\n\r\nI have found that this can be a code smell by
    how you describe although it really depends on the context.\r\n\r\nFrom the way
    you desecribe the main method being 50% comments, that in it's self would bother
    me. I try to be more expressive with code and try to avoid comments as they can
    clutter methods. On your second note, about having a bunch of parameters for the
    private method, this would definately be a code smell there for me. This would
    perhaps be an indicator for me to refactor that code to a utility class for the
    controllers although again, it depends on the context.\r\n\r\nCan you paste the
    code in a comment so everyone can take a gander? Or you can post it to marc's
    refactormycode.com...cool site."
- id: 5126
  author: Bill
  author_email: bbarry@stellarfinancial.com
  author_url: http://16randombytes.blogspot.com
  date: !binary |-
    MjAwNy0xMC0yNiAxODoxNTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0yNiAxNzoxNTo0MyArMDEwMA==
  content: ! "I consider comments inside methods to be code smell esp if they appear
    to be necessary to explain what is going on. If a method is confusing enough that
    it is helpful for there to be comments then the method is probably too complex.\r\n\r\nI
    also agree with Sean about parameters, I like to keep them down to at most 5 or
    7; anything more usually means that they are dependent on each other and they
    should be part of a larger class structure that gets sent in instead."
---
<p>Just a quick one: I have a method in my controller which is about 30 lines long, and also calls another private method in that class which is about 15 lines long. The main method is 50% comments. The private method is only that long due to the formatting of parameters in a constructor and was extracted from the main method for readability; it's not reused. So my question to you is: when does excessive method length start to become a code smell? Does this situation sound like it's ripe for refactoring? What sort of thing makes you shudder when you open a class file?</p>
