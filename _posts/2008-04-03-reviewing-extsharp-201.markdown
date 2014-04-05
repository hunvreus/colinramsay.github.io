---
layout: post
status: publish
published: true
title: Reviewing ExtSharp 2.0.1
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 427
wordpress_url: http://colinramsay.co.uk/?p=427
date: !binary |-
  MjAwOC0wNC0wMyAwMDo1NjoxOSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNC0wMiAyMzo1NjoxOSArMDEwMA==
categories:
- .NET
- C#
- Javascript
- Ext
tags: []
comments:
- id: 17710
  author: Ricardo Stuven
  author_email: rstuven@gmail.com
  author_url: http://ricardo-stuven.blogspot.com
  date: !binary |-
    MjAwOC0wNC0wMyAwNTo0ODoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wMyAwNDo0ODoxMCArMDEwMA==
  content: ! "For ExtJS code generation (just when needed), I'm using a custom MonoRail
    helper for ExtJS and Brail's nice literal dictionary syntax. This allows me to
    writes things like:\r\n\r\n\t${ExtJS.BeginForm()}\r\n\t${ExtJS.Push(\"contact\")}\r\n\t${ExtJS.FormPanel({\r\n\t\t@assignTo:
    \"currentForm\", // a Javascript variable name for internal use\r\n\t\t@url: Url.For({@action:
    \"SendContact\"}),\r\n\t\t@frame: true,\r\n\t\t@items: [\r\n\t\t\tExtJS.TextField(\"Name\",
    {\r\n\t\t\t\t@fieldLabel: 'Your name',\r\n\t\t\t\t@anchor: \"100%\"\r\n\t\t\t}),\r\n\t\t\tExtJS.TextField(\"Email\",
    {\r\n\t\t\t\t@fieldLabel: 'Your e-mail',\r\n\t\t\t\t@width: 150\r\n\t\t\t}),\r\n\t\t\tExtJS.ComboBox(\"Country.Id\",
    countries, {\r\n\t\t\t\t@fieldLabel: 'Country',\r\n\t\t\t\t@width: 150,\r\n\t\t\t\t@typeAhead:
    true,\r\n\t\t\t\t@valueField: 'Id',\r\n\t\t\t\t@displayField: 'Name'\r\n\t\t\t}),\r\n\t\t\tExtJS.TextArea(\"Message\",
    {\r\n\t\t\t\t@fieldLabel: 'Message',\r\n\t\t\t\t@width: 250,\r\n\t\t\t\t@height:
    100\r\n\t\t\t})\r\n\t\t]\r\n\t})}\r\n\t${ExtJS.Pop()}\r\n\t${ExtJS.EndForm()}\r\n\r\n\r\nNote
    this code also generates client validation (if defined) and data store configuration
    for the combobox field."
- id: 17713
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wNC0wMyAwOToxNToyMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wMyAwODoxNToyMSArMDEwMA==
  content: That's interesting Ricardo - is that helper available for download anywhere?
- id: 17718
  author: Iouri
  author_email: no@no.no
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0wMyAxNjoxOTozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wMyAxNToxOTozOSArMDEwMA==
  content: Bummer, eh?
- id: 17723
  author: Nikhil Kothari
  author_email: nikhilko@microsoft.com
  author_url: http://www.nikhilk.net
  date: !binary |-
    MjAwOC0wNC0wMyAyMTowMzoyNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0wMyAyMDowMzoyNSArMDEwMA==
  content: ! "I am not sure who constructed the Ext# wrapper... but there are things
    that could be better, and far from horrible.\r\nFor example, if there was a ColumnModel
    object, you wouldn't need to use Dictionaries and string-based programming. Finally,
    the Ext API style and patterns certainly doesn't mesh 100% with c# - this is obvious
    because Ext wasn't written with a c#-flavor, and script# was written to work with
    the c# flavor of APIs and patterns. For an actual compasion of the script# model,
    though I don't think that is your goal with this post, I'd recommend checking
    out what you can do by seeing the script# framework itself.\r\n\r\nAs far as Ext#
    JS wrapper goes in your layering above, its a compile-time thing only. The c#
    compiler and script# compiler need to know what the APIs are that you are targeting
    to be able to do their compilation job. This doesn't show up at runtime.\r\n\r\nThe
    script# utility js is there for defining classes etc. a type system. There needs
    to be some representation of what a class is, what a method is, how inheritance
    is expressed etc. Theoretically, if there was deeper integration of script# and
    Ext, you wouldn't need a script# type system. The compiler would have an Ext generator
    that would target Ext patterns directly."
- id: 18891
  author: Jamal James (Teflon114)
  author_email: teflon114@gmail.com
  author_url: http://code.google.com/p/extsharp/
  date: !binary |-
    MjAwOC0wNC0yMyAwNDowMjo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0yMyAwMzowMjo0MyArMDEwMA==
  content: ! "I just happened to stumble upon this post while making some updates
    to ExtSharp. I am the developer of ExtSharp. \r\n\r\nInitially, this project started
    out as an attempt to get better tool support for ExtJS. As a .NET developer with
    about 7 days javascript experience (at the time), I began pulling my hair because
    of the difficulty I was facing trying to use object oriented concepts in JS. I
    needed to get started on a project that I really wanted to use ExtJS for but I
    felt programming in JS would lead me down a road of unmanageable, extremely fragile
    code. I was very spoiled by the great syntax highlighting, code completion, code
    navigation, refactoring, and all the other niceties that VS2005+ReSharper gave
    me. Working with JS in VS was comparable to using pico to write Modula-3 code
    back in my college days. I was essentially back in Notepad. So I decided to look
    for other options.\r\n\r\nI initially attempted to find an IDE with better javascript
    support than VS2005, but found it difficult as well to be bouncing between apps,
    one for the client code and one for the server code. Then I tried the VS2008 betas
    hoping for a better experience but was disappointed when VS refused to parse the
    ExtJS code. I eventually came across Script# and decided to give it a whirl. A
    few days later, I was as happy as a pig in sh!t. I could use the ExtJS library
    without giving up the coding luxuries I had grown so fond of. \r\n\r\nI eventually
    decided I would give back to the ExtJS community by posting my findings, as well
    as source code, to the forums. My intentions were to give the source away for
    others to learn from it, modify it, and use it how it best suites them. I had
    no idea how much attention this project would receive. I've received a ton of
    great positive and negative feedback and I appreciate it all. I've tried my best
    to keep the code up to date with the latest ExtJS releases and fixing bugs and
    minor enhancements. \r\n\r\nI have completed my project utilizing Ext# and I've
    learned a lot about javascript along the way. If I were to start a new ExtJS project
    right now, I'd most likely stick to pure JS this time around. There are some limitations
    in Ext# that can be difficult to work around. I still feel that Ext# is a great
    tool and I would use it again if I were working with other novice JS developers.
    \r\n\r\nI basically say all this to say to you, thank you for taking the time
    to review my work. Its more flattering than anything else. I appreciate all of
    your criticism , both positive and negative. I can't promise Ext# will grow much
    from where it is right now but it's been doing a good job for me thus far."
---
<p>After my earlier post on JS generation from C#, I wanted to investigate my options. Although <a href="http://zproxy.wordpress.com/">zproxy</a> highlighted the <a href="http://jsc.sourceforge.net/">jsc project</a>, I wanted to focus on a real world scenario first and so I'm looking at <a href="http://code.google.com/p/extsharp/">ExtSharp</a>, which relies on <a href="http://www.nikhilk.net/ScriptSharpIntro.aspx">Script#</a>, a project which will "compile your C# source code into JavaScript".</p>
<p>ExtSharp leverages Script# to allow you to write ExtJS applications in C#, which was my target when I began thinking about JS generation. I'd like full intellisense, documentation and compile-time checking when working with this rich framework. Will ExtSharp give me that?</p>
<p>Downloading ExtJS2Samples-v2.0.1.zip from the Google Code site gives me a solution of samples. Here an interesting implementation issue arises - all of the actual C#-Javascript class files are in a separate project to the .aspx pages which display them. This is down to necessity; Script# uses an assembly called sscorlib which, bizarrely, seems to provide its own implementations of many of the .NET types found in the mscorlib assembly.</p>
<p>This separate project also runs an MSBuild targets file from Script# which runs after main compilation to compile the C# into Javascript. Straight away I'm seeing two bits of magic - sscorlib and post-build events - which I'm not too keen on. But the solution builds, and after changing the web.config references to nStuff.ScriptSharp.Web to 0.4.5.0, I am able to view the samples.</p>
<p>Based on my earlier post, I was interested in the Window sample, but unfortunately that didn't work. The array Grid one did though, and it operated just as the ExtJS website sample does. Many of the other samples are missing, which is disappointing; of the ones which are present, most work very well. Overall, I was encouraged, and I moved on to looking at the C# code which was generating these samples.</p>
<p>Let's look at how a ColumnModel is built when working in Javascript:</p>
<pre><code class="javascript">var colModel = new Ext.grid.ColumnModel([
           {id:'company',header: "Company", width: 160, sortable: true, dataIndex: 'company'},
            {header: "Price", width: 75, sortable: true, renderer: 'usMoney', dataIndex: 'price'},
            {header: "Change", width: 75, sortable: true, renderer: change, dataIndex: 'change'},
            {header: "% Change", width: 75, sortable: true, renderer: pctChange, dataIndex: 'pctChange'},
            {header: "Last Updated", width: 85, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
 ]);</code></pre>
<p>I think that's pretty concise - there's not a lot of cruft. Now the ExtSharp version:</p>
<pre><code class="csharp">ColumnModel colModel = new ColumnModel(new Dictionary[] {
    new Dictionary("id", "company", "header", "Company", "width", 160, "sortable", true, "locked", false, "dataIndex", "company"),
    new Dictionary("header", "Price", "width", 75, "sortable", true, "renderer", new MoneyRenderer(Format.usMoney), "dataIndex", "price"),
    new Dictionary("header", "Change", "width", 75, "sortable", true, "renderer", new ColumnRenderer(change), "dataIndex", "change"),
    new Dictionary("header", "% Change", "width", 75, "sortable", true, "renderer", new ColumnRenderer(pctChange), "dataIndex", "pctChange"),
    new Dictionary("header", "Last Updated", "width", 85, "sortable", true, "renderer", Format.dateRenderer("m/d/Y"), "dataIndex", "lastChange")
});</code></pre>
<p>Hmm. Lots of strings - I'm not keen. This is one of two methods of providing a configuration to an Ext class, the second of which involves a specific config class:</p>
<pre><code class="csharp">Ext.grid.GridPanel grid = new Ext.grid.GridPanel(new Ext.grid.GridPanelConfig()
    .el("grid-example")
    .ds(ds)
    .cm(colModel)
    .autoExpandColumn("company")
    .height(350)
    .width(600)
    .title("Array Grid")
    .ToDictionary()
);</code></pre>
<p>Unconventional style, to say the least, but at least it's properly typed. This is pretty far away from my ideal API for this kind of thing. Let's look at how this is turned into Javascript.</p>
<p>As I previously mentioned, the Script# project contains MSBuild targets which generate the JS code after the build is complete. This code can then either be referenced directly, or via some ASP.NET controls from your ASPX pages. As well as your own generated code, you must also reference a couple of Script# files and a wrapper file for Ext itself. That wrapper file is actually what makes everything work here - rather than your C# code being converted into something which works with the Ext library, it instead only works with the Ext wrapper provided by ExtSharp.</p>
<p>Looking at the ExtSharp project overall, I'm not a convert. There are too many layers between your C# and where it finally touches the "real" Javascript:</p>
<p>1. Your generated JS<br />
2. ExtSharp JS wrapper<br />
3. Script# utility JS</p>
<p>The C# API is also pretty horrible - certainly not in my style but also far from being an API I recognise from any other project I've worked on. Whether this is a style choice or due to technical limitations, I'm not sure. </p>
<p>The ExtSharp project definitely drew my curiosity, and could hold promise. In its current state, I wouldn't consider using it in a project of my own, as the API is not strong enough to make me swap from native Javascript. Still, I will continue to follow future work with interest.</p>
