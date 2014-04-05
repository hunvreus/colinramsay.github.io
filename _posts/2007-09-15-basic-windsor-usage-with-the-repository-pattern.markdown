---
layout: post
status: publish
published: true
title: Basic Windsor Usage with the Repository Pattern
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "I've been interested in using the Repository pattern in an application
  for a while now; same goes for Windsor. When prototyping with repositories it became
  clear that I could use them together in a fairly simple way which would serve as
  a good introduction to both.\r\n\r\n"
wordpress_id: 387
wordpress_url: http://colinramsay.co.uk/2007/09/15/basic-windsor-usage-with-the-repository-pattern/
date: !binary |-
  MjAwNy0wOS0xNSAxNjozOTozMiArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOS0xNSAxNTozOTozMiArMDEwMA==
categories:
- .NET
- C#
- Patterns
- Windsor
- Castle
tags: []
comments: []
---
<p>I've been interested in using the Repository pattern in an application for a while now; same goes for Windsor. When prototyping with repositories it became clear that I could use them together in a fairly simple way which would serve as a good introduction to both.</p>
<p><a id="more"></a><a id="more-387"></a></p>
<p>Let me begin by showing how I have set up Windsor; I will be using a simple console application to demonstrate the code. Starting a new Console Application Project in Visual Studio, I added references to Castle.Core.dll, Castle.DynamicProxy2.dll, Castle.MicroKernel.dll, Castle.Windsor.dll and nunit.framework.dll. I also added an app.config file to store the Windsor configuration.</p>
<p>Our first snippet of code initialises the Windsor container. Put this in the Main method of your console app:</p>
<pre><code>IWindsorContainer container = new WindsorContainer(new XmlInterpreter(new ConfigResource("castle")));</code></pre>
<p>All the above code does is create a new instance of the Windsor container. Notice that we're using XmlInterpreter to allow us to access our Winsdor configuration in the app.config. We'll fill in those configuration details later.</p>
<p>Let's now create a few classes for us to work with:</p>
<pre><code>public class IGenericRepository&lt;T&gt; { }public class TestGenericRepository&lt;T&gt; : IGenericRepository&lt;T&gt; { }

</code></pre>
<p>Simple empty stubs for demonstration purposes, hopefully no explanation is necessary. We could use this as follows:</p>
<pre><code>TestGenericRepository&lt;T&gt; repo = new Â TestGenericRepository&lt;T&gt;();repo.DoSomething();

</code></pre>
<p>However, I would prefer to have a slightly simpler syntax like this:</p>
<pre><code>Repository&lt;object&gt;.DoSomething();</code></pre>
<p>In order to do this, we can create a static class which wraps up access to a repository instance provided by Windsor:</p>
<pre><code>public static class Repository&lt;T&gt;
{
    public static IRepository InnerRepository
    {
        get
        {
            return IoC.Container.Resolve&lt;IGenericRepository&lt;T&gt;&gt;();
        }
    }
}
</code>
</pre>
<p>We're grabbing a WindsorContainer instance and calling the Resolve method to get the configured implementation of IGenericRepository&lt;T&gt;. There's some trickery going on there with another static class called IoC:</p>
<pre><code>public static class IoC{

    private static IWindsorContainer _innerContainer;

    public static IWindsorContainer Container
    {
        get
        {
            return _innerContainer;
        }
    }

    public static void Initialise(IWindsorContainer container)
    {
        _innerContainer = container;
    }
}
</code></pre>
<p>IoC, shamelessly stolen from <a href="http://www.ayende.com/Blog/">Ayende's</a> <a href="http://rhino-tools.svn.sf.net/svnroot/rhino-tools/trunk/rhino-commons/">Rhino Commons</a>, allows access to an initialised container throughout your application. This is how I use it in this application:</p>
<pre><code>IoC.Initialise(container);</code></pre>
<p>All we're doing is putting our previously initialised container somewhere that we can access from elsewhere in our application, such as the InnerRepository property of our static Repository class.</p>
<p>Now we need to configure Windsor to supply us with the right implementation of IGenericRepository&lt;T&gt;. Add this code to your app.config:</p>
<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;
&lt;configuration&gt;
	&lt;configSections&gt;
		&lt;section
			name=&quot;castle&quot;
			type=&quot;Castle.Windsor.Configuration.AppDomain.CastleSectionHandler, Castle.Windsor&quot; /&gt;
	&lt;/configSections&gt;
	&lt;castle&gt;
		&lt;components&gt;
			&lt;component
				id=&quot;generic.repository&quot;
				service=&quot;WindsorTest.IGenericRepository`1, WindsorTest&quot;
				type=&quot;WindsorTest.TestGenericRepository`1, WindsorTest&quot; /&gt;
		&lt;/components&gt;
	&lt;/castle&gt;
&lt;/configuration&gt;</code></pre>
<p>A lot of this is for the basic setup of Windsor, but the bit we're interested in is the component node. We've specified a unique id for our component, then the service defines the interface we're going to be providing an implementation of. That implementation is specified in the type attribute value. Note the slightly strange "`1" notation - that's the CLR string representation of a generic argument (in C# it would look like IGenericRepository&lt;T&gt;). With this single node we're telling Windsor what implementation of IGenericRepository&lt;T&gt; Windsor should provide.</p>
<p>This means that the call to WindsorContainer.Resolve in our static Repository&lt;T&gt; class will return an instance of TestGenericRepository&lt;T&gt; - all our wiring up is now complete. We can check that everything is working with an extra line in our Console app:</p>
<pre><code>Assert.IsInstanceOfType(typeof(TestGenericRepository&lt;object&gt;), Repository&lt;object&gt;.InnerRepository);</code></pre>
<p>We're just checking that theÂ IGenericRepository&lt;T&gt; implementation being obtained by the staticÂ Repository&lt;T&gt; is in fact TestGenericRepository&lt;T&gt; as we configured in the app.config. I've put the full project for this test applicationÂ  here: <a TITLE="WindsorTest Project" HREF="http://colinramsay.co.uk/wp-content/uploads/2007/09/windsortest.zip">Windsor Repository Test Project</a>.</p>
<p>So what's the benefit of this approach? Well, I'm going to use it to swap out my implementation of a generic Repository so that I can use different ones for my unit tests and my live application while using the same interface throughout my code. All I'll have to do is change a configuration file.</p>
