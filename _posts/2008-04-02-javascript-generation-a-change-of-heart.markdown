---
layout: post
status: publish
published: true
title: Javascript Generation - A Change Of Heart
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 420
wordpress_url: http://colinramsay.co.uk/diary/?p=420
date: !binary |-
  MjAwOC0wNC0wMiAxNTowMzo1MSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNC0wMiAxNDowMzo1MSArMDEwMA==
categories:
- .NET
- C#
- Javascript
- Development
- Ext
tags: []
comments:
- id: 17700
  author: zproxy
  author_email: zproxy@hot.ee
  author_url: http://zproxy.wordpress.com
  date: !binary |-
    MjAwOC0wNC0wMiAxODowOTo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wMiAxNzowOTo0NyArMDEwMA==
  content: ! "There is a similar project that does compile C# binary to javascript
    and actionscript  at http://jsc.sf.net\r\n\r\nCheck it out aswell."
- id: 17717
  author: mdmadph
  author_email: mdmadph@gmail.com
  author_url: http://mdm-adph.blogspot.com
  date: !binary |-
    MjAwOC0wNC0wMyAxMzo1ODo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wMyAxMjo1ODo0NCArMDEwMA==
  content: This'll come in handy, when my company eventually goes over to ASP -- thanks!
- id: 17928
  author: Fatih HayrioÄ?lu&#8217;nun not defteri &raquo; 08 Nisan 2008 web&#8217;den
    seÃ§me haberler
  author_email: ''
  author_url: http://www.fatihhayrioglu.com/?p=481
  date: !binary |-
    MjAwOC0wNC0wOSAxOTowMTozMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wOSAxODowMTozMSArMDEwMA==
  content: ! '[...] C# ve javascript iÅ?birlirÄ?ini saÄ?lamak. ExtSharp BaÄ?lantÄ±
    [...]'
- id: 18695
  author: Aybar
  author_email: weird_wee@hotmail.com
  author_url: http://www.aybardumlu.com
  date: !binary |-
    MjAwOC0wNC0xOCAwODoyNjoyOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xOCAwNzoyNjoyOCArMDEwMA==
  content: www.aybardumlu.com
---
<p>I've previously talked about my dislike for code generation in Javascript. I still standby that, but I am beginning to have a change of heart for certain scenarios. I've been working on a couple of ExtJS applications recently and I've got lots of code which is purely <a href="http://extjs.com/">ExtJS</a> stuff on its own - no HTML or other code in there really. It's been a project where I've been using C# 3 and it's partly the similarities between the two languages which have triggered this rethink.</p>
<p>Take a look at this code:</p>
<pre><code class="javascript">var win = new Ext.Window({
	title: 'Order Viewer', layout: 'border',
	width: 500, height: 500,
	modal: true, resizable: false, closable: false, draggable: false,
	items: [ frm, lst ]
});

win.on('render', function() {
	load(5);
});

win.show();</code></pre>
<p>That's pretty standard stuff for what I'm doing with Ext right now - I create a new window with a load of configuration options, then add in an event handler for the window's render event, and finally show the window on screen. Now imagine that you could write the following in C# 3:</p>
<pre><code class="csharp">var win = new Ext.Window{
	Title = "OrderViewer", Layout = Layout.Border,
	Width = 100, Height = 200,
	Modal = true, Resizable = false, Closable = false, Draggable = false,
	Items = new [] { frm, lst }
};

win.Render += delegate {
	load(5);
};
	
win.show();</code></pre>
<p>As far as I'm aware, all of the above is valid C# 3 code. I've basically written it as I'd like to use it, with an enum for the Layout type, and C# style event handler syntax, but the interesting thing to me is how very similar it is to the Javascript version.</p>
<p>The <a href="http://code.google.com/p/extsharp/">ExtSharp</a> project allows you to write your Ext code in C# and have it rendered as Javascript. I'm going to explore it in my next post, and examine how closely it can be made to fit the code sample above.</p>
