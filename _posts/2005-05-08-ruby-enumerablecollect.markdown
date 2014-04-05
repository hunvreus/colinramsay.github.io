---
layout: post
status: publish
published: true
title: Ruby - Enumerable.collect
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 177
wordpress_url: http://www.colinramsay.co.uk/?p=177
date: !binary |-
  MjAwNS0wNS0wOCAxNzoxNzozOCArMDEwMA==
date_gmt: !binary |-
  MjAwNS0wNS0wOCAxNzoxNzozOCArMDEwMA==
categories:
- Ruby
tags: []
comments: []
---
<p>This is great. Imagine I have a collection of ProductGroup objects, and I need to create an array of the id's of these objects. In Ruby I can just do this:</p>
<p><code>@product_group.Products.collect {|x| x.id }</code></p>
<p>This returns a new array containing id's of all the Products in @product_group.</p>
