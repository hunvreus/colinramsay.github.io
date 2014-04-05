---
layout: post
status: publish
published: true
title: Another Nibernate Call For Help - One-To-One
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 440
wordpress_url: http://colinramsay.co.uk/?p=440
date: !binary |-
  MjAwOC0wNi0wNCAwOTozNzo1MCArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNi0wNCAwODozNzo1MCArMDEwMA==
categories:
- NHibernate
tags: []
comments:
- id: 20699
  author: James Kovacs
  author_email: jkovacs@post.harvard.edu
  author_url: http://www.jameskovacs.com
  date: !binary |-
    MjAwOC0wNi0wNCAxNzoyODoxOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0wNCAxNjoyODoxOSArMDEwMA==
  content: One-to-one in NHibernate is a bit of a confusing beast. The one-to-one
    mapping assumes a shared primary key, which is not always the case. (For instance,
    you can't use  to map the relationship between Customer.HomeAddress and the Address
    table because HomeAddress would contain a FK to the Address table.) You may also
    run into problems with your scenario because EmployeeDetail may not always be
    present. An easier solution is to map it as a one-to-many and then picking up
    the first (and only) element in the returned collection. (I map it as an IList
    field and then have the unmapped T property deal with getting/setting the first
    element.)
---
<p>I have a relationship which would normally be described as one-to-one. It's very similar to a Employee / EmployeeDetail relationship which you see used in many examples. My issue is that I'm working with legacy data, so the "child" part of the relationship, the EmployeeDetail, probably won't exist.</p>
<p>I'm struggling to understand how to map this. I know if it wasn't for the absent EmployeeDetails, this would be one-to-one. So I'm loathe to think about this in terms of another relationship type because as soon as the EmployeeDetail is available, it will be one-to-one again.</p>
<p>I'd appreciate any thoughts anyone out there might have.</p>
