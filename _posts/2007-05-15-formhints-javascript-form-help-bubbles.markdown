---
layout: post
status: publish
published: true
title: FormHints - Javascript Form Help Bubbles
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: When creating <a href="http://www.wiretaplive.com/">Wiretap</a>, I wanted
  some kind of inline help system which would not only help users but would not detract
  from the layout of the form. I've seen lots of systems where there's a little question
  mark next to the form elements, or where there is a big lump of text underneath
  every box. So I wanted mine to be unobtrusive and flexible.
wordpress_id: 373
wordpress_url: http://colinramsay.co.uk/2007/05/15/formhints-javascript-form-help-bubbles/
date: !binary |-
  MjAwNy0wNS0xNSAxMDoyMTowOCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNS0xNSAwOToyMTowOCArMDEwMA==
categories:
- Projects
- Javascript
- FormHints
tags: []
comments: []
---
<p>When creating <a href="http://www.wiretaplive.com/">Wiretap</a>, I wanted some kind of inline help system which would not only help users but would not detract from the layout of the form. I've seen lots of systems where there's a little question mark next to the form elements, or where there is a big lump of text underneath every box. So I wanted mine to be unobtrusive and flexible.<a id="more"></a><a id="more-373"></a></p>
<p><a href="http://colinramsay.co.uk/formhints/current/">FormHints</a> is the reusable version of the <a href="http://www.wiretaplive.com/">Wiretap</a> help system. You add a class to your form element, then create a div with a specific id to link it to the form element. You can fill the div with any HTML you like, and when the form element gets focus, a bubble will pop up containing the contents of the div, styled into a curvy transparent thing of beauty. A demo shows it off better than I can describe it.</p>
<p>Now, there is a two-step process to setting up a formhint. Firstly, add a class of "hasHint" to the form element you which to give a hint to:</p>
<pre><code>&lt;label&gt;
First Name: &lt;input name="firstname" class="hasHint" /&gt;
&lt;/label&gt;</code></pre>
<p>Secondly, add a div anywhere on your page with an id of hint-FORMELEMENTNAME, where FORMELEMENTNAME is the value of the name attribute of the form element from the previous step:</p>
<pre><code>&lt;label&gt;
First Name: &lt;input name="firstname" class="hasHint" /&gt;
&lt;div id="hint-firstname"&gt;
&lt;p&gt;hello test!!&lt;/p&gt;
&lt;img src="http://www.google.co.uk/intl/en_uk/images/logo.gif" /&gt;
&lt;/div&gt;
&lt;/label&gt;</code></pre>
<p>The inner content of this div will be included in your form hint, so you can have images or links or tables, pretty much anything. You can download FormHints here:</p>
<p><a href="http://colinramsay.co.uk/formhints/current/">FormHints - A Javascript Help System</a></p>
<p>Note that I've called this release <strong>0.9</strong> as I have yet to test it exhaustively. Please report any bugs through the comments.</p>
