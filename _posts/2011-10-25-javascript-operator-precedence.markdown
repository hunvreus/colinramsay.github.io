---
layout: post
status: publish
published: true
title: JavaScript Operator Precedence
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 741
wordpress_url: http://colinramsay.co.uk/?p=741
date: !binary |-
  MjAxMS0xMC0yNSAxNDo1MTowMCArMDEwMA==
date_gmt: !binary |-
  MjAxMS0xMC0yNSAxMzo1MTowMCArMDEwMA==
categories:
- Javascript
tags: []
comments: []
---
<p>Operator precendence is the order in which operators are evaluated within an expression. For example, take this:</p>
<p><code class="javascript">var leftStart = 5,<br />
    width = 2;<br />
var left = leftStart - width / 2;</code></p>
<p>Now, what are we actually doing here? Is it:</p>
<p><code class="javascript">var left = (leftStart - width) / 2;</code></p>
<p>Or:</p>
<p><code class="javascript">var left = leftStart - (width / 2);</code></p>
<p>The addition of brackets would have made the original code more explicit, but is noisier and requires more typing. Reviewing <a href="https://developer.mozilla.org/en/JavaScript/Reference/Operators/Operator_Precedence">JavaScript operator precedence</a> shows that the division operator has higher precedence over subtraction, so in the above two examples we're going to get the same result as in the second snippet.</p>
<p>The remaining question is - why bother? By being explicit with brackets, you remove any ambiguity, despite having to type a little more. But I'd argue that not understanding precedence means you're leaving yourself open to bugs, and in more complicated examples the character noise will obscure the meaning of the code you're writing.</p>
