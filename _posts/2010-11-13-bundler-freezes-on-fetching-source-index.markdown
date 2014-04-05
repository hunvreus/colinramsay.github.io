---
layout: post
status: publish
published: true
title: Bundler Freezes on "Fetching source index"
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 665
wordpress_url: http://colinramsay.co.uk/?p=665
date: !binary |-
  MjAxMC0xMS0xMyAxMTozOTozMyArMDAwMA==
date_gmt: !binary |-
  MjAxMC0xMS0xMyAxMDozOTozMyArMDAwMA==
categories:
- Ruby
- Bundler
tags: []
comments: []
---
<p>In order to resolve this, first follow the Bundler troubleshooting instructions:</p>
<p><a href="https://github.com/carlhuda/bundler/blob/master/ISSUES.md">https://github.com/carlhuda/bundler/blob/master/ISSUES.md</a></p>
<p>Next, if you're using rvm then it might make sense to delete and recreate your gemset, just in case. However, neither of these actions fixed my problem alone. What I needed to do was look at my Gemfile and make it a bit more sensible to help bundler resolve all of my dependencies. From this:</p>
<p><code>source :rubygems</p>
<p># common gems here</p>
<p>group :development, :test, :cucumber do<br />
end</p>
<p>group :test, :cucumber do<br />
end</p>
<p>group :test do<br />
end</p>
<p>group :cucumber do<br />
end</code></p>
<p>To this:</p>
<p><code>source :rubygems</p>
<p># common gems here</p>
<p>group :development, :test, :cucumber do<br />
end</p>
<p>group :test, :cucumber do<br />
end</code></p>
<p>By using less group combinations, bundler has less work to do and doesn't get stuck sorting out what gems you want to install.</p>
