---
layout: post
status: publish
published: true
title: Fizzler Used to Style WPF
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 525
wordpress_url: http://colinramsay.co.uk/?p=525
date: !binary |-
  MjAwOS0wMy0xMSAxOTozMzo1OCArMDAwMA==
date_gmt: !binary |-
  MjAwOS0wMy0xMSAxODozMzo1OCArMDAwMA==
categories:
- .NET
- CSS
- Projects
- Fizzler
- WPF
tags: []
comments: []
---
<p>After I <a href="http://colinramsay.co.uk/diary/2008/10/19/fizzler-a-css-selector-engine-for-c-sharp/">wrote Fizzler</a> in a burst of development enthusiasm a few months back, it's been sat on <a href="http://code.google.com/p/fizzler/">Google Code</a> - a solution in need of a problem to solve. That is until <a href="http://www.scottlogic.co.uk/blog/wpf/">Colin Eberhardt</a> emailed me to report a bug in the selector engine, and to talk a bit about the way he was using Fizzler when working with WPF. This was totally outside the domain I'd anticipated Fizzler being use in, and Colin E has now <a href="http://www.scottlogic.co.uk/blog/wpf/2009/03/using-css-selectors-for-styling-in-wpf/">revealed his project in full</a>. By wrapping part of Fizzler in a few interfaces, thus abstracting it away from HTML and towards a more general purpose solution, he was able to use it to query a XAML UI definition and apply style declarations. <a href="http://www.scottlogic.co.uk/blog/wpf/2009/03/using-css-selectors-for-styling-in-wpf/">CSS selectors for WPF</a>!</p>
<p>This is an amazing use case for a library which I hope will start to see more use in the future. Thanks to Colin E for letting me know about the work which <a href="http://www.scottlogic.co.uk/">Scottlogic</a> are doing with <a href="http://code.google.com/p/fizzler/">Fizzler</a>.</p>
