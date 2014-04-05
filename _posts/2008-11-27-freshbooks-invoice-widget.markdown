---
layout: post
status: publish
published: true
title: Freshbooks Invoice Widget
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 468
wordpress_url: http://colinramsay.co.uk/?p=468
date: !binary |-
  MjAwOC0xMS0yNyAwMDo1MDo1NCArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMS0yNiAyMzo1MDo1NCArMDAwMA==
categories:
- Personal
- Projects
- PHP
- Freshbooks
- Plastiscenic
tags: []
comments:
- id: 22915
  author: Zach Aysan
  author_email: zach@freshbooks.com
  author_url: http://www.freshbooks.com
  date: !binary |-
    MjAwOC0xMS0yNyAxNjowMDo0NCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yNyAxNTowMDo0NCArMDAwMA==
  content: ! "Dude, that is so awesome. So ridiculously awesome. \r\n\r\n- Zach from
    FreshBooks"
- id: 22917
  author: Randy from FreshBooks
  author_email: randy@freshbooks.com
  author_url: http://www.freshbooks.com
  date: !binary |-
    MjAwOC0xMS0yNyAxNzo0NDowNCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yNyAxNjo0NDowNCArMDAwMA==
  content: NEAT read. Thanks for posting on the forum!
- id: 22925
  author: FreshBooks API Blog - Fun with SparkLines
  author_email: ''
  author_url: http://developers.freshbooks.com/blog/2008/11/28/fun-with-sparklines/
  date: !binary |-
    MjAwOC0xMS0yOCAyMTo0Mjo1MiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0yOCAyMDo0Mjo1MiArMDAwMA==
  content: ! '[...] Ramsay, who runs Plastiscenic, and is a customer of ours, has
    created a really fun little application on our API. It displays a sparkline of
    revenue by [...]'
- id: 22950
  author: Fun with SparkLines
  author_email: ''
  author_url: http://www.freshbooks.com/blog/2008/12/01/fun-with-sparklines/
  date: !binary |-
    MjAwOC0xMi0wMSAyMzoyMDoyNyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wMSAyMjoyMDoyNyArMDAwMA==
  content: ! '[...] Ramsay, who runs Plastiscenic, and is a customer of ours, has
    created a really fun little application on our API. It displays a sparkline of
    revenue by [...]'
---
<p>At <a href="http://www.plastiscenic.co.uk">Plastiscenic</a>, I organise all the boring stuff using <a href="http://www.freshbooks.com">Freshbooks</a>. In fact, Freshbooks make sorting invoices, estimates and time tracking a bit of a breeze. I was mulling over the past month of work when it struck me that I was thinking about things in completely the wrong way: I was trying to ensure that I was busy all the time, when in fact all that matters - from a business perspective - was that I was earning enough.</p>
<p>Freshbooks has a record of all of the Plastiscenic invoices, and therefore the amount we've brought in during a given month. It also has an <a href="http://developers.freshbooks.com/overview/">API</a>. I decided to quickly flex my PHP muscles and come up with a cash-orientated way of viewing my performance via my invoice data.</p>
<p><a href="http://colinramsay.co.uk/freshbooks/invoice-widget.zip"><img src="http://colinramsay.co.uk/wp-content/uploads/2008/11/fb-invoice-widget.png" alt="" title="Freshbooks Invoice Widget" width="165" height="58" class="alignright size-full wp-image-469" /></a>I created a <a href="http://colinramsay.co.uk/freshbooks/invoice-widget.zip">web invoice widget for Freshbooks</a> which uses the <a href="http://sparkline.org/">Sparkline PHP Graphing Library</a> to generate a graph of the past 12 months. Ones in which invoice totals exceed the specified upper threshold are marked in green, and ones which are lower than the lower threshold are red. Everything else is black. To the side of the graph, there's a numerical readout of the invoice totals from this month and the previous month, again coloured accordingly. </p>
<p>In terms of the actual scripts involved, you need to edit FbInvoicePerformance.php and enter your Freshbooks API token and API URL which can be obtained in your Freshbooks account. Then just tweak index.php from the archive according to your needs. The good and bad variables are the high and low thresholds for colouration, and the HTML in that file it just boilerplate for demonstration purposes and can be hacked as you like. Notice the readout function for displaying the numerical invoice totals. The FbInvoicePerformance class powers the whole thing but it's pretty small and usage should be clear from the index.php file.</p>
<p>This <a href="http://colinramsay.co.uk/freshbooks/invoice-widget.zip">Freshbooks invoice widget</a> is completely unsupported by me. Sparkline requires PHP 4.0.6 or newer (including PHP 5) and GD 2.0 built as a PHP module, so bear that in mind if you try and use the widget. There's no demo, but you can <a href="http://colinramsay.co.uk/freshbooks/invoice-widget.zip">download the widget here</a>.</p>
