---
layout: post
title: Yodlee Fastlink Postmessage Not Working?
published: true
---

The documentation for [Yodlee's Fastlink](https://developer.yodlee.com/Yodlee_API/FastLink/FastLink_3.0_Integration_Guide) leaves something to be desired. It mentions that you can use [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to receive communications from the Fastlink iFrame, but in reality these never arrive. Unless...

Having rummaged through the Fastlink JavaScript source, I found that the postMessage would not be sent unless you specified a parameter called `locationurl`, something that's only supposed to be necessary if you want to resize the iFrame. It also wasn't clear how to add this new parameter. Turns out you have to jam it in to an `extraParams` parameter:

```
<input type="hidden" name="extraParams" value="locationURL=<Your calling URL>" />
```

Hopefully this saves someone else from wasting several hours while being ignored by Yodlee's support staff.

UPDATE! _Two weeks_ after I requested support, Yodlee sent me this:

> Apologies for the delayed response. The sandbox environment doesn't enable the post messages on the FastLink iFrame, which is why you're not seeing a response. 

Seems like they don't know their own product too well...
