---
layout: post
status: publish
published: true
title: Technology Brainstorm
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "<p>Recently <a href=\"http://www.plastiscenic.co.uk\" target=\"_blank\">Plastiscenic</a>
  has been asked to quote for a fairly large project, and if it comes off I'll have
  the chance to work on it from the ground up, using whatever technologies I think
  are best suited.</p> \n"
wordpress_id: 399
wordpress_url: http://colinramsay.co.uk/2007/10/10/technology-brainstorm/
date: !binary |-
  MjAwNy0xMC0xMCAwMDozNToxNyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0xMC0wOSAyMzozNToxNyArMDEwMA==
categories:
- Personal
- Agile Development
- Monorail
- TDD
- Windsor
- Castle
tags: []
comments: []
---
<p>Recently <a href="http://www.plastiscenic.co.uk" target="_blank">Plastiscenic</a> has been asked to quote for a fairly large project, and if it comes off I'll have the chance to work on it from the ground up, using whatever technologies I think are best suited.</p>
<p><a id="more"></a><a id="more-399"></a></p>
<p>Monorail is an absolute no brainer for me. The last ASP.NET Webforms project I worked on was a nightmare and I've no real desire to repeat the experience. More importantly, the nature of the project is such that I want to make sure I keep good separation of logic, and MR definitely lends itself to that.</p>
<p>So that's the easy part. Next up is the database; normally I'd jump straight in with Castle's ActiveRecord implementation but I've recently been working with straight NHibernate and I can clearly see why people like it. Compared to AR it's cleaner - less cruft in your entities and again, it's easier to separate your concerns because you don't have AR-specific attributes decorating your objects.</p>
<p>However, the sheer mobility of working with ActiveRecord makes it appealing. I'm more familiar with the attribute-based configuration and it's also got great integration with MR. And then when you factor in the Castle validation support, which stretches across AR, into MR, then down to the client side, it's almost looking like a no-brainer.</p>
<p>Finally, I have to tie it all together. This project is going to benefit from having strongly independent and tightly tested Services (yes, capital &quot;s&quot;), and I'm considering whether I want to use Windsor to pull these in. The advantage of working with Windsor from the ground up is that I can use it in my unit tests as well, and in association with my growing knowledge of Rhino Mocks I can see that being a very powerful advantage.</p>
<p>I'm open to suggestions - at the moment the power that the Castle stack offers is looking to be hard to beat (maybe I'm biased these days!), but I'd love to hear how other people approach a brand new project and evaluation of the available technologies.</p>
