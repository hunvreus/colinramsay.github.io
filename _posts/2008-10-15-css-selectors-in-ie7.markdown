---
layout: post
status: publish
published: true
title: CSS Selectors in IE7
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 453
wordpress_url: http://colinramsay.co.uk/?p=453
date: !binary |-
  MjAwOC0xMC0xNSAxMjowMzoxMSArMDEwMA==
date_gmt: !binary |-
  MjAwOC0xMC0xNSAxMTowMzoxMSArMDEwMA==
categories:
- CSS
- Internet Explorer
tags: []
comments: []
---
<p>I'm quite partial to doing something like this in my CSS:</p>
<pre><code class="css">input { border: 1px solid #ccc; }</code></pre>
<p>That'll give every textfield a single pixel border. The trouble with that is we'll also get one on every radio button and checkbox too, which looks rubbish. Even though IE7 has been out for ages, I'd never really bothered to absorb what CSS features it provides. Lowest common denominator is still important in web applications, with IE6 having a statistically significant portion of the market. However, the news that a current project doesn't have to support IE6 led me to trying out this CSS:</p>
<pre><code class="css">input[type="text"] { border: 1px solid #ccc; }</code></pre>
<p>The <a href="http://www.w3.org/TR/CSS2/selector.html#attribute-selectors">attribute selector</a> is mostly supported in IE7 and it allows me to restrict my borders to specific input types! Huzzah!</p>
