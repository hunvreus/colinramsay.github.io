---
layout: post
status: publish
published: true
title: Pure Javascript Intellisense
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 443
wordpress_url: http://colinramsay.co.uk/?p=443
date: !binary |-
  MjAwOC0wNi0yNyAxODo0ODo0OCArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNi0yNyAxNzo0ODo0OCArMDEwMA==
categories:
- Projects
- Javascript
- JSON
- Intellisense
tags: []
comments: []
---
<p>Last week I sat down to create a proof of concept for a Visual Studio-style intellisense implementation written purely in Javascript. I'm quite pleased with the results, although it's not very robust. Let's cut to the chase - have a look at the <a href="http://colinramsay.co.uk/intellisense/current/demo.html">pure javascript intellisense demo</a>, or <a href="http://colinramsay.co.uk/intellisense/current/plastiscenic-intellisense-current.zip">download an archive</a>.</p>
<p>Now, let me explain what's happening there before you get too underwhelmed. Basically, when you type, the script runs a tokenizer to split your previous text into chunks. When that tokenizer hits upon a delimiter, in the demo that's the "." character, it'll send your previous token to the server and popup the result in the intellisense box. You can tab to the box and hit enter to select an option. Pressing tab also cycles through the options in the box.</p>
<p>What I've written is very simple. The tokenizer can be totally swapped out, so you could define your own rules for parsing your input and obtaining a token. And when the token gets to the server, you can interpret it in any way, returning anything back to be put in the intellisense box.</p>
<p>Like I say, this is proof of concept stuff only but I can definitely see applications for it. It's been tested in FF3 and IE8 Beta - nothing else. I've <a href="http://dev.plastiscenic.co.uk/svn/projects/Plastiscenic.Intellisense/">got an SVN repo online</a> and would happily accept patches or comments. <a href="http://colinramsay.co.uk/intellisense/current/plastiscenic-intellisense-current.zip">Download Javascript Intellisense here</a>.</p>
