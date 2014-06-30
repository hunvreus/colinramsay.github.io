---
layout: post
title: Chrome New Tab Reminders and Notes
published: false
---

The stock New Tab page in Chrome isn't much use to me, since the address bar does all the searching of my history, bookmarks and Google itself quicker than clicking around the screen. For some reason, you can't just set the New Tab page to an arbitrary website either, which would have been useful.

A quick look around shows that there are a fair few extensions which replace the New Tab screen, but they looked a bit fancy for my needs. A dig around the Chrome developer documentation showed me how absurdly easy it would be to create what I really wanted - a persisting page of notes and reminders available on my New Tab screen. Let's take a look.

A Manifest and Some HTML
---

Chrome extensions need a manifest, written using JSON. Here's the one that I used:

{% highlight json %}
{
  "name": "New Tab Override",
  "manifest_version": 2,
  "version": "1.0",
  "chrome_url_overrides" : {
    "newtab": "newtab.html"
  }
}
{% endhighlight %}

This should be fairly self-explanatory, with the key being the chrome_url_overrides key which is described in more detail in the [Chrome extension docs](https://developer.chrome.com/extensions/override). I've specified that newtab will be overriden by an HTML page called "newtab.html". In newtab.html, I can create any content I like - completely arbitrary. Just anything 

Installing and Using
---

So you've got your manifest.json and newtab.html in a convenient directory somewhere, let's install it in Chrome. Visiting chrome://extensions/ and make sure the Developer Mode tickbox is enabled. This should give you a new button labelled "Load Unpacked Extension" - click that and navigate to your convenient directory containing your files.

Try opening a new tab - you should see your custom HTML page pop up!

Conclusion
---

This is a really quick look at how to build a very simple, but extremely practical Chrome extension. I've started using mine for habit tracking - a counter of the number of days I've successfully maintained a good habit, right there in my face when I open a new tab. That uses JavaScript to track the number of days since an arbitrary date.

And speaking of JavaScript, you could actually use a JS markdown implementation so that your new tab contents is stored as a .markdown file, with the HTML just being a bootstrap to parse the markdown. That sounds like a job for another post!
