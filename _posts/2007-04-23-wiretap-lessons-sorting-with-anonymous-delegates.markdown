---
layout: post
status: publish
published: true
title: Wiretap Lessons - Sorting with Anonymous Delegates
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: When creating Wiretap, I needed to be able to sort a collection of Wiretap
  Servers in C# code. There's nothing wrong with the way I ended up doing, but it
  never sat very well with me. Using anonymous delegates, which are provided in C#
  2.0, I can remove this niggling code smell.
wordpress_id: 359
wordpress_url: http://colinramsay.co.uk/2007/04/23/wiretap-lessons-sorting-with-anonymous-delegates/
date: !binary |-
  MjAwNy0wNC0yMyAyMjo0NzoxNiArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0yMyAyMTo0NzoxNiArMDEwMA==
categories:
- C#
- Wiretap
- Refactoring
tags: []
comments: []
---
<p>When creating Wiretap, I needed to be able to sort a collection of Wiretap Servers in C# code. There's nothing wrong with the way I ended up doing, but it never sat very well with me. Using anonymous delegates, which are provided in C# 2.0, I can remove this niggling code smell.<a id="more"></a><a id="more-359"></a></p>
<p>My initial code looked a little something like this:</p>
<pre><code>...

private class ServerComparer : IComparer&lt;Server&gt;
{
	public int Compare(Server leftTestInstance, Server rightTestInstance)
	{
		return string.Compare(leftTestInstance.Name, rightTestInstance.Name);
	}
}

public void List()
{
	// Find all of the servers with a status of ok
	List&lt;Server&gt; okServers = list.FindAll(StatusOk);

	// Sort the collection in name ascending order
	okServers.Sort(new ServerComparer());
}

...</code></pre>
<p>This is ok, but I'm creating a whole new class for nothing really - it's never going to get reused and it sits in the same file as the outer class. It just doesn't <em>feel right</em>.</p>
<pre><code>public void List()
{
	// Find all of the servers with a status of ok
	List&lt;Server&gt; okServers = list.FindAll(StatusOk);

	okServers.Sort(delegate(Server leftServer, Server rightServer)
			{
				return string.Compare(leftServer.Name, rightServer.Name);
			});
}</code></pre>
<p>Better. The code's all in one place, and I don't need to create a new class any more. For those with an eye to the future, the next version of C# can potentially make things even neater. I think this type of code would work with C# 3.0 - I'm going to download a beta to try and check but I'd appreciate any feedback.</p>
<pre><code>public void List()
{
	// Find all of the servers with a status of ok
	List&lt;Server&gt; okServers = list.FindAll(StatusOk);

	okServers.Sort(leftServer, rightServer =&gt; string.Compare(leftServer.Name, rightServer.Name));
}</code></pre>
<p>For me, we're approaching optimum sweetness right there. Thanks to <a href="http://weblogs.asp.net/dwahlin/archive/2007/04/23/The-Power-of-Anonymous-Methods-in-C_2300_.aspx">Dan Wahlin</a>, who inspired this post.<br />
<hints id="hah_hints"></hints></p>
