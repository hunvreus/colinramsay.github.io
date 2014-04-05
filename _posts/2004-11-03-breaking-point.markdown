---
layout: post
status: publish
published: true
title: Breaking Point
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 120
wordpress_url: http://www.colinramsay.co.uk/?p=120
date: !binary |-
  MjAwNC0xMS0wMyAxOTo1NDoyMCArMDAwMA==
date_gmt: !binary |-
  MjAwNC0xMS0wMyAxOTo1NDoyMCArMDAwMA==
categories:
- Semantic Web
tags: []
comments:
- id: 7
  author: Colin Ramsay
  author_email: webmaster@happyandlost.co.uk
  author_url: ''
  date: !binary |-
    MjAwNC0xMS0wMyAyMDowMDoxOSArMDAwMA==
  date_gmt: !binary |-
    MjAwNC0xMS0wMyAyMDowMDoxOSArMDAwMA==
  content: ! 'On the off chance I get some smart-arse telling me I''ve got a stray
    BR somewhere in my site - well done superhero! You win the pettiness prize of
    the day!

'
---
<p>Within the web design profession, most people seem to be picking up on the idea of web standards. Casting aside for a moment talk of <a href="http://www.molly.com/2004/10/26/what-is-a-web-standard/" title="What is a Web Standard">whether the term "web standards" is so great</a>, I wonder how many people are truly advocates and how many are in it for the buzzwords.</p>
<p>When I talk about web standards, I'm pretty much using an umbrella term which refers to the use of CSS, valid HTML, and semantic accessible markup when creating a site. It's all very well if your website validates, but if you're not in the spirit of it, with well-used markup, then surely you're missing the point?</p>
<p>Anyway, back to the title of this post. I've seen a lot of people using the BR tag in their sites, particularly to present menus and lists of links. No. No, no, no. This is totally wrong, and defeats the purpose of using CSS to lay out your website. The point of CSS is that it allows flexibility. By separating content from *yawn* yes. You've heard that before. Clearly some people weren't listening.</p>
<p><code><br />
&lt;a&gt;my link&lt;/a&gt;&lt;br/&gt;<br />
&lt;a&gt;my link&lt;/a&gt;&lt;br/&gt;<br />
&lt;a&gt;my link&lt;/a&gt;<br />
</code></p>
<p>Well done, you've created a vertical list of links! But you've done it in a terrible way. The BR tag causes a line break. What if you want to change your list to a horizontal list? You'd be knackered. Here's the right way:</p>
<p><code><br />
&lt;ul&gt;<br />
        &lt;li&gt;&lt;a&gt;my link&lt;/a&gt;&lt;/li&gt;<br />
        &lt;li&gt;&lt;a&gt;my link&lt;/a&gt;&lt;/li&gt;<br />
        &lt;li&gt;&lt;a&gt;my link&lt;/a&gt;&lt;/li&gt;<br />
&lt;/ul&gt;<br />
</code></p>
<p>A little more markup, but it's <em>correct</em> markup. You have a list of links - put them in a list! And now that we have removed the line break tags, we can format the list however we want - vertically or horizontally. So please kids, follow the spirit and not the letter of the web standards movement.</p>
