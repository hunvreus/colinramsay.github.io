---
layout: post
status: publish
published: true
title: Lightweight CSS Forms
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
excerpt: ! "For ages, I'd style my forms up using a container div to wrap each item
  within the form. It always seemed a bit wasteful, so I've been trying out an alternative.\r\n\r\n"
wordpress_id: 376
wordpress_url: http://colinramsay.co.uk/2007/06/10/lightweight-css-forms/
date: !binary |-
  MjAwNy0wNi0xMCAxMTo1OTo0MSArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNi0xMCAxMDo1OTo0MSArMDEwMA==
categories:
- CSS
- Snippet
tags: []
comments:
- id: 164
  author: Brian
  author_email: brian@demarzo.net
  author_url: http://www.sidesofmarch.com
  date: !binary |-
    MjAwNy0wNi0xMCAxODo1NDo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wNi0xMCAxNzo1NDo0MyArMDEwMA==
  content: ! "A little  wrapper around each label/field combo is no big deal -- 11
    characters per form field is not a lot to add to a form. \r\n\r\nWhat's more,
    embedding input tags into labels causes issues for things like checkboxes and
    radio controls that may have varying label placement.\r\n\r\nIf you're interested
    I documented my standard form layout technique (using DIVs) here: http://www.sidesofmarch.com/index.php/archive/2007/02/19/css-styled-forms/"
- id: 165
  author: colinramsay
  author_email: colinramsay@gmail.com
  author_url: http://
  date: !binary |-
    MjAwNy0wNi0xMCAyMDozMjowOCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wNi0xMCAxOTozMjowOCArMDEwMA==
  content: ! "Well, I don't agree with the first part of what you say - it's not just
    the number of characters which is the problem but the added attributes and nested
    elements. But fair enough if this approach causes issues with placement; that's
    why I invited comment in the first place!\r\n\r\nI'd still say that if you're
    not having those issues that the simpler HTML I talk about is a better approach,
    but then you may introduce consistancy problems if you're using both.\r\n\r\nI
    daresay it'll depend on the project."
---
<p>For ages, I'd style my forms up using a container div to wrap each item within the form. It always seemed a bit wasteful, so I've been trying out an alternative.</p>
<p><a id="more"></a><a id="more-376"></a></p>
<p>Here's my old code:</p>
<pre><code>&lt;form action="/submit/" method="post"&gt;

	&lt;label for="name"&gt;Name&lt;/label&gt;
	&lt;input id="name" name="name" /&gt;

	&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
<p>It's a bit wasteful though, because every field in the form is wrapped by a div. And in order to make it so clicking on a label gives the associated form element focus, you have to add a "for" attribute on the label and a matching "id" on the form element. So you've got a fair bit of cruft just to implement a form field.</p>
<p>My ideal markup for this situation would be:</p>
<pre><code>&lt;form action="/submit/" method="post"&gt;
	&lt;label&gt;Name &lt;input name="name" /&gt;&lt;/label&gt;
&lt;/form&gt;</code></pre>
<p>There's not a bit of cruft there! But the advantage of the first approach is that your containing</p>
<p>gives you a lot of flexiblity when it comes to styling. With this second approach, getting the label text and the form field where you want them through the power of CSS is a lot trickier, but fortunately I do have those tricks up my sleeve. CSS has the position:absolute rule, which causes the element you use it with to be pulled out of the document flow and positioned with regard to the document. But there's a useful caveat to this; if that element is contained within another element which has position:absolute <strong>or</strong> position:relative applied, then the child element will be positioned with regard to its parent. An excellent interactive example of this concept can be seen at <a href="http://www.quirksmode.org/css/position.html">Quirksmode's position declaration</a> page.</p>
<p>So, what we do is give our &lt;label&gt; position:relative. Without specifying a top, bottom, left or right value for this positioning, it won't affect the position of the label onscreen, but it will mean that the &lt;input&gt; inside can now be positioned absolutely with regard to the label. Using this knowledge in conjunction with text-align on the label, to set where the label text will appear.You can see a couple of examples of this technique on the sample page I've built. I've only been using this method for a short time but the simplicity of it appeals to me. However if you do come across any limitations then I'd love to hear about them.</p>
