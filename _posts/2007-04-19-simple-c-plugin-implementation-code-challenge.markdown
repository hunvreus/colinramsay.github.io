---
layout: post
status: publish
published: true
title: Simple C# Plugin Implementation - Code Challenge
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "When building Wiretap, I wanted an easy way of adding new Test Types without
  having to do much work. It occurred to me that what I needed was to basically supporting
  Test Types as plugins, so I wrote a small method to achieve this. Here's the code,
  adapted for general use.\r\n"
wordpress_id: 354
wordpress_url: http://colinramsay.co.uk/2007/04/19/simple-c-plugin-implementation-code-challenge/
date: !binary |-
  MjAwNy0wNC0xOSAxNDozMDoxOSArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0xOSAxMzozMDoxOSArMDEwMA==
categories:
- .NET
- C#
- Code Challenge
tags: []
comments: []
---
<p>When building Wiretap, I wanted an easy way of adding new Test Types without having to do much work. It occurred to me that what I needed was to basically supporting Test Types as plugins, so I wrote a small method to achieve this. Here's the code, adapted for general use.<br />
<a id="more"></a><a id="more-354"></a><br />
<code>
<pre>public IPlugin LoadPluginFromAssembly(string pluginAssembly, string pluginType)
{
	// This should come froma config file
	string sourceAssemblyPath = @"c:\plugins\" + pluginAssembly + ".dll";</code>

	// Load the dll containing containing the plugin type
	Assembly assembly = Assembly.LoadFrom(sourceAssemblyPath);

	Type testType = null;

	try
	{
		// Search all of the types until we find
		// one which matches the specified plugin type
		foreach (Type type in assembly.GetTypes())
		{
			if (type.IsClass)
			{
				if (type.FullName.EndsWith("." + testInstance.TestType.Type))
				{
					testType = type;
				}
			}
		}
	}
	catch (Exception ex)
	{
		_logger.Error(ex.Message);
	}

	return Activator.CreateInstance(testType) as IPlugin;
}</pre>
<p></code></p>
<p>There are a number of improvements which I can see in this, so if you feel you can do better, post your own Better Plugin Implementation and link back here!</p>
