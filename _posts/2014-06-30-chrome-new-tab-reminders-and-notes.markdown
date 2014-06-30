---
layout: post
title: Chrome New Tab Reminders and Notes
published: false
---

The stock New Tab page in Chrome isn't much use to me, since the address bar does all the searching of my history, bookmarks and Google itself quicker than clicking around the screen. For some reason, you can't just set the New Tab page to an arbitrary website either, which would have been useful.

A quick look around shows that there are a fair few extensions which replace the New Tab screen, but they looked a bit fancy for my needs. A dig around the Chrome developer documentation showed me how absurdly easy it would be to create what I really wanted - a persisting page of notes and reminders available on my New Tab screen. Let's take a look.

A Manifest and Some HTML
====

Chrome extensions need a manifest, written using JSON. Here's the one that I used:

{
  "name": "New Tab Override",
  "manifest_version": 2,
  "version": "1.0",
  "chrome_url_overrides" : {
    "newtab": "new.html"
  }
}

This should be fairly self-explanatory, with the key being the chrome_url_overrides key which is described in more detail in the (Chrome extension docs)[https://developer.chrome.com/extensions/override].
