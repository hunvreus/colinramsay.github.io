---
layout: post
status: publish
published: true
title: Working with JSON and C# 3.0
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "I've been using libraries such as <a href=\"http://www.newtonsoft.com/products/json/\">NewtonSoft's
  JSON.NET</a> or <a href=\"http://www.schwarz-interactive.de/\">AjaxPro</a> to serialize
  a class to <a href=\"http://www.json.org/\">JSON</a>. There's something about my
  approach which didn't really sit too well, and C# 3 has an elegant solution.\r\n"
wordpress_id: 371
wordpress_url: http://colinramsay.co.uk/2007/05/08/working-with-json-and-c-30/
date: !binary |-
  MjAwNy0wNS0wOCAyMDo1OToyNyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNS0wOCAxOTo1OToyNyArMDEwMA==
categories:
- .NET
- Ajax
- C#
- Javascript
- Visual Studio
- JSON
tags: []
comments: []
---
<p>I've been using libraries such as <a href="http://www.newtonsoft.com/products/json/">NewtonSoft's JSON.NET</a> or <a href="http://www.schwarz-interactive.de/">AjaxPro</a> to serialize a class to <a href="http://www.json.org/">JSON</a>. There's something about my approach which didn't really sit too well, and C# 3 has an elegant solution.<br />
<a id="more"></a><a id="more-371"></a></p>
<p>Here's an extremely contrived example to illustrate the point; I only want certain properties of Page to be sent as JSON:</p>
<pre><code>public class PageController
{
	public void List()
	{
		Page[] allPages = Page.FindAll();

		DisplayablePage[] displayablePages = new DisplayablePage[];
	
		for(int i = 0; i < allPages.Length; i++)
		{
			string name = allPages[i].Name;
		
			displayablePages[i] = new DisplayablePage(name);
		}
		
		RenderText(Json.Serialize(displayablePages));
	}
	
	private class DisplayablePage
	{
		private string _name;

		public string Name
		{
			get { return _name; }
			set { _name = value; }
		}
		
		public DisplayablePage(string name)
		{
			_name = name;
		}
	}
}</code></pre>
<p>Now, as you can see I have created the DisplayablePage class which will then be serialized as JSON. However, this class is never used anywhere else. It's a bit of a crutch for what I'm trying to do. In C# 3.0, I can use anonymous types to achieve the same goal:</p>
<pre><code>public class PageController
{
	public void List()
	{
		Page[] allPages = Page.FindAll();

		object[] displayablePages = new object[];
	
		for(int i = 0; i < allPages.Length; i++)
		{
			string name = allPages[i].Name;
		
			displayablePages[i] = <strong>new { Name = name };</strong>
		}
		
		RenderText(Json.Serialize(displayablePages));
	}
}</code></pre>
<p>I can create an anonymous type which will then be serialized as JSON, reducing the code necessary to achieve my goal. I'm using an object array now, rather than an array of a fixed type, which you could argue isn't as good as in the previous sample. In my eyes it's ok, because we're only using this array for this specific purpose.</p>
