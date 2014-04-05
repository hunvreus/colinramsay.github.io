---
layout: post
status: publish
published: true
title: Using Delegates in Refactoring
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: I'm doing some work on a .NET 1.1 application right now, and I have a situation
  where I have very similar code being repeated in a number of different classes.
  The code does paging of a collection, which is then rendered as JSON; it's not complex
  code but it did take me a few goes to get right, and so rather than copying and
  pasting it all over the place I refactored it so the core functionality was only
  written once. In order to do that, I used delegates.
wordpress_id: 375
wordpress_url: http://colinramsay.co.uk/2007/05/29/using-delegates-in-refactoring/
date: !binary |-
  MjAwNy0wNS0yOSAxMzoxMzoyNiArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNS0yOSAxMjoxMzoyNiArMDEwMA==
categories:
- .NET
- C#
- JSON
tags: []
comments: []
---
<p>I'm doing some work on a .NET 1.1 application right now, and I have a situation where I have very similar code being repeated in a number of different classes. The code does paging of a collection, which is then rendered as JSON; it's not complex code but it did take me a few goes to get right, and so rather than copying and pasting it all over the place I refactored it so the core functionality was only written once. In order to do that, I used delegates.<a id="more"></a><a id="more-375"></a></p>
<p>This is the second time I've used delegates to do this sort of thing, and both times my brain has started referring to the usage pattern as a <em>worker</em>. I'm not very up on programming patterns, but this seemed to fit what was happening in the code.  Here's what I had initially:</p>
<pre><code>protected void RenderListJson(string dir, int limit, string sort, int start)
{
	int count = 0;
	int numberOfUsersToDisplay = limit;
	int endIndex = start + limit;

	if(start + limit > items.Count)
	{
		numberOfUsersToDisplay = items.Count - start;
		endIndex = items.Count;
	}

	DisplayableGroup[] currentPage = new DisplayableGroup[numberOfGroupsToDisplay];

	for (int i = start; i < endIndex; i++)
	{
		Group group = (Group)groups[i];

		int id = group.Oid;
		string name = group.Name;

		currentPage[count] = new DisplayableGroup(id, name);
		count++;
	}

	return "{\"totalcount\":\"" + items.Count + "\", \"groups\":" + JavaScriptSerializer.Serialize(currentPage) + "}";
}

private class DisplayableGroup
{
	private int _id;
	private string _name;

	public int Id
	{
		get { return _id; }
		set { _id = value; }
	}

	public string Name
	{
		get { return _name; }
		set { _name = value; }
	}


	public DisplayableGroup(int _id, string _name)
	{
		this._id = _id;
		this._name = _name;
	}
}</code></pre>
<p>There is code in there to ensure the array I'm returning is the right size for the page of data that's being returned. That's to prevent null entries in the resultant JSON array. The real "work" is being done inside the for loop, the code which starts "Group group = (Group)groups[i];". It's this bit which I needed to lift out into a "worker" method.</p>
<p>The code above sits inside a GroupController, which inherits from my BaseController. In BaseController I now created a new delegate:</p>
<pre><code>protected delegate void BuildDisplayableClass(int count, object[] currentPage, int endIndex, int start, IList users, int i);</code></pre>
<p>From there, I could create a core "RenderJson" method which incorporated this delegate. This also went in BaseController:</p>
<pre><code>protected string RenderListJson(string dir, int limit, string sort, int start, BuildDisplayableClass worker, IList items, string arrayLabel)
{
	IList items = Group.FindAll(new Order(sort, dir.ToLower() == "asc");
	int count = 0;
	int numberOfUsersToDisplay = limit;
	int endIndex = start + limit;

	if(start + limit > items.Count)
	{
		numberOfUsersToDisplay = items.Count - start;
		endIndex = items.Count;
	}

	object[] currentPage = new object[numberOfUsersToDisplay];

	for (int i = start; i < endIndex; i++)
	{
		worker(count, currentPage, endIndex, start, items, i);
		count++;
	}

	return "{\"totalcount\":\"" + items.Count + "\", \""+ arrayLabel +"\":" + JavaScriptSerializer.Serialize(currentPage) + "}";
}</code></pre>
<p>As you can see, this is very similar to the first code sample, but the section inside of the for loop has been replaced by a call to the passed delegate. I can use this code in an inheriting class as follows:</p>
<pre><code>public void RenderListJson(int start, int limit, string dir, string sort)
{
	BuildDisplayableClass displayable = new BuildDisplayableClass(BuildDisplayableGroupClass);
	IList groups = Group.FindAll(new Order(sort, dir.ToLower() == "asc"));

	string listJson = RenderListJson(dir, limit, sort, start, displayable, groups, "groups");

	RenderText(listJson);
}

private static void BuildDisplayableGroupClass(int count, object[] currentPage, int endIndex, int start, IList groups, int i)
{
	Group group = (Group)groups[i];

	int id = group.Oid;
	string name = group.Name;

	currentPage[count] = new DisplayableGroup(id, name);
}</code></pre>
<p>So I've got a BuildDisplayableGroupClassmethod which has the same signature as my BuildDisplayableClass delegate - that delegate is now instantiated by passing BuildDisplayableGroupClass in the constructor. The instantiated delegate can now be passed into RenderListJson as a "pointer" to the worker method which I'd like to use. In this way I can insert functionality into another method to reduce the repetition of code.</p>
<p>Jomo Fisher has an <a href="http://blogs.msdn.com/jomo_fisher/archive/2005/09/13/464884.aspx">excellent example of using delegates</a> in various versions of C#, and explains how this scenario (<a href="http://colinramsay.co.uk/2007/05/08/working-with-json-and-c-30/">and many others</a>) will be a lot easier to address in C# 3.</p>
