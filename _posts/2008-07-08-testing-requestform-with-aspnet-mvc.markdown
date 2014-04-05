---
layout: post
status: publish
published: true
title: Testing Request.Form with ASP.NET MVC
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "I wanted to quickly spike an idea that I had last night, and while normally
  I'd use Monorail, I thought it was high time I took an interest in ASP.NET MVC.
  It took about ten minutes for me to stumble to a halt.\r\n"
wordpress_id: 445
wordpress_url: http://colinramsay.co.uk/?p=445
date: !binary |-
  MjAwOC0wNy0wOCAxMDoyMjozMSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNy0wOCAwOToyMjozMSArMDEwMA==
categories:
- Monorail
- ASP.NET MVC
tags: []
comments:
- id: 21319
  author: Robin Clowers
  author_email: robin.clowers@gmail.com
  author_url: http://robinclowers.blogspot.com
  date: !binary |-
    MjAwOC0wNy0wOCAxNjo1OToxNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wOCAxNTo1OToxNCArMDEwMA==
  content: ! "While I have not spent much time looking at ASP.NET MVC, I am pretty
    sure it has convention based parameter population.   So you should be able to
    do this:\r\n\r\npublic void Save(Model item) \r\n\r\nwhere the name of the argument
    matches a key in the form.Request collection.  \r\n\r\nI think ScottGu wrote about
    this when one of the early previews dropped, but I could not find the post."
- id: 21320
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wNy0wOCAxNzoxOTozNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wOCAxNjoxOTozNiArMDEwMA==
  content: I just tried it Robin, and it doesn't seem to work. I'd be happy to be
    proved wrong though, because it would be the simplest solution.
- id: 21322
  author: Bart
  author_email: bart.reyserhove@gmail.com
  author_url: http://bartreyserhove.blogspot.com
  date: !binary |-
    MjAwOC0wNy0wOCAyMDozNDo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wOCAxOTozNDo0NyArMDEwMA==
  content: I think there is a way to use the Castle DataBind attribute in ASP.NET
    MVC. If I'm not mistaken it's in MVCContrib. I haven't tried it out yet, because
    I use my own binder that also binds the associations with other entities. Otherwise
    my controller is cluttered with code to get the associations filled
---
<p>I wanted to quickly spike an idea that I had last night, and while normally I'd use Monorail, I thought it was high time I took an interest in ASP.NET MVC. It took about ten minutes for me to stumble to a halt.<br />
<a id="more"></a><a id="more-445"></a><br />
In Monorail, you can do something like this:</p>
<pre><code class="csharp">public void Save([DataBind("item")]Model model){}</code></pre>
<p>The instance of model will be automatically populated with incoming variables from Request.Form or Request.QueryString. To do similar in ASP.NET MVC, it seems you have to do this:</p>
<pre><code class="csharp">public void Save()
{
    Model model = new Model();
    BindingHelperExtensions.Binding.UpdateFrom(model, Request.Form, "item");
}</code></pre>
<p>A bit more verbose, but I can live with that. The trouble came when I was thinking about unit testing this (yes, I should have thought about that first if I really wanted to do TDD, bla bla).</p>
<p>In Monorail, a test for the above could look like:</p>
<pre><code class="csharp">public void SaveTest()
{
    MyController controller = new MyController();
    controller.Save(new Model());
}</code></pre>
<p>Obviously the above doesn't actually do anything, but you get the point. But how would I replicate that with ASP.NET MVC? I can't just pass through a ready-made instance to the Save action. I needed some way to pass through some values to Request.Form so that UpdateFrom would have something to chew on. </p>
<p>Trouble is... there doesn't seem to be a simple way of doing that. I've reviewed a number of blog articles, and even looking at the <a href="http://www.codeplex.com/mvcsamples/SourceControl/FileView.aspx?itemId=149232&changeSetId=9325">code for Rob Conery's Storefront</a> which is now linked from the ASP.NET website itself, shows that his solution is to create a fake HttpContextBase class which uses a mock HttpRequestBase.</p>
<p>This being Preview 3, I'd like to think that this process would be streamlined in the near future, but for now, I'll pass.</p>
