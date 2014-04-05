---
layout: post
status: publish
published: true
title: Simple Javascript Watermarks in Input Fields
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "<p>I had a change request today to label a couple of text input fields
  with a watermark. The client didn't think it was immediately obvious what the user
  was supposed to enter, but we didn't have space for the traditional text labels
  next to the inputs. The suggested solution was to have a watermark which &quot;underlayed&quot;
  the input box with the label text which disappears on focus and reappears on blur.</p>
  \r\n"
wordpress_id: 401
wordpress_url: http://colinramsay.co.uk/2007/10/17/simple-javascript-watermarks-in-input-fields/
date: !binary |-
  MjAwNy0xMC0xNyAyMzoyNDozNyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0xMC0xNyAyMjoyNDozNyArMDEwMA==
categories:
- Javascript
- Snippet
tags: []
comments:
- id: 4359
  author: Jason Meirdth
  author_email: jmeridth@gmail.com
  author_url: http://blog.jasonmeridth.com
  date: !binary |-
    MjAwNy0xMC0xOCAwMDo0NjoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xNyAyMzo0NjoyMyArMDEwMA==
  content: That is awesome!!  I'll be looking at this.
- id: 4407
  author: cristian
  author_email: cristianlibardo@hotmail.com
  author_url: http://n2cms.com
  date: !binary |-
    MjAwNy0xMC0xOCAxNjo0MToxNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xOCAxNTo0MToxNSArMDEwMA==
  content: ! "I just read about a related approach that might interest you:\r\n\r\nhttp://www.456bereastreet.com/archive/200710/autopopulating_text_input_fields_with_javascript/"
- id: 4408
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwNy0xMC0xOCAxNzoxNjo0MiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xOCAxNjoxNjo0MiArMDEwMA==
  content: ! "@cristian:\r\n\r\nOddly enough I spotted that as I was writing my post
    last night but I didn't realise how similar it is to mine. A really interesting
    post, thanks!"
---
<p>I had a change request today to label a couple of text input fields with a watermark. The client didn't think it was immediately obvious what the user was supposed to enter, but we didn't have space for the traditional text labels next to the inputs. The suggested solution was to have a watermark which &quot;underlayed&quot; the input box with the label text which disappears on focus and reappears on blur.</p>
<p><a id="more"></a><a id="more-401"></a></p>
<h3>Smoke &amp; Mirrors</h3>
<p>The trouble was that these boxes appeared in various places in the site, and I had a load of issues to address. Since we'd decided that this was more of a prompt than a necessity, I didn't feel too bad in using javascript to hook up this fix, and when I realised all of these fields had a particular CSS class, &quot;name&quot;, on the surrounding containing element, I was good to go with a quick trick. All of the big javascript libraries have a helper to select elements by class; in Prototype it's <a href="http://prototypejs.org/api/utility/dollar-dollar" target="_blank">the $$ utility method</a>. Using this, I could grab all of the elements I wanted, and perform an action:</p>
<pre>$$('.name').each(function(element) {
	// do something with element
});</pre>
<p>$$ grabs me the elements by selector, in this case ".name", all of the elements marked with a class of "name". It returns them as a Prototype array, which I can iterate over using the <a href="http://prototypejs.org/api/array/each">Array.each</a> method. Each takes an anonymous function with a single parameter: an array item, and in our case that'll be an element which matches our selector. I now needed to do something with this element, so I define a new function to set the watermark:</p>
<pre>function setWatermark(element) {
	if(element.value.length == 0) {
		element.style.background = 'white url(/content/images/watermark.png) no-repeat top left;';
	}
}</pre>
<h3>A Swirl of the Cape</h3>
<p>We can use this function in our main code to initialise the watermark. We then create event handlers for the focus and blur events, where setWatermark will handle focus, and blur will simply clear the background image.</p>
<pre>$$('.name').each(function(element) {
	// initialise
	setWatermark(element);

	Event.observe(element, 'focus', function() { setWatermark(element); });
	Event.observe(element, 'blur', function() { element.style.background = ''; });
});</pre>
<p>That's it! Wrap it all up in a window.load (or equivalent) and you're ready to go. This is a great example of unobtrusive javascript and progressive enhancement.</p>
<h3>At the End of the Day</h3>
<p>I've truncated this code for example purposes. The real version is packaged up using the <a href="http://yuiblog.com/blog/2007/06/12/module-pattern/">YUI Blog Module pattern</a>, and allows alternate image paths to be passed to the setWatermark function. If you'd like to see this in action, I've uploaded <a href="http://colinramsay.co.uk/tests/watermark/">an example watermark page</a>, it's only tested in Firefox and IE6 but should work in IE7 too. I know it's got issues in Opera 9.5. Enjoy!</p>
