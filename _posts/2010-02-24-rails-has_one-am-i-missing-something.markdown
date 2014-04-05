---
layout: post
status: publish
published: true
title: Rails has_one - Introducing "Incorporates"
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 585
wordpress_url: http://colinramsay.co.uk/?p=585
date: !binary |-
  MjAxMC0wMi0yNCAwMjo0ODozMiArMDAwMA==
date_gmt: !binary |-
  MjAxMC0wMi0yNCAwMTo0ODozMiArMDAwMA==
categories:
- Ruby on Rails
- Ruby
tags: []
comments:
- id: 25129
  author: Ben Scheirman
  author_email: ben@scheirman.com
  author_url: http://flux88.com
  date: !binary |-
    MjAxMC0wMy0wOCAyMzo0NTo1NSArMDAwMA==
  date_gmt: !binary |-
    MjAxMC0wMy0wOCAyMjo0NTo1NSArMDAwMA==
  content: I like it.  I ran across this exact same dilemma a couple weeks ago and
    just decided to bite the bullet and not use inheritance.  We instead "include"
    the common behaviors for 1 hierarchy which are defined in a module somewhere.  It's
    a little hairy, but it works.
---
<p>I'm a Ruby noobie, I admit it. Coming from a .NET background, Ruby has been a learning experience for sure, but I certainly feel lke I've learned something along the way. One aspect of the Rails framework I really like is the relaxed attitude to working with the database - I really rarely have to worry about it.</p>
<p>That said, I've been puzzling over the use of inheritance with Active Record. In .NET land and with NHibernate, I'd quite happily have this:</p>
<pre><code class="csharp">class AbstractUser
class AdminUser : AbstractUser
class StandardUser : AbstractUser</code></pre>
<p>All the *User subtypes have their own extra properties, and the AbstractUser provides some common ones like email, password, username. </p>
<p>Ruby doesn't actually provide for abstract classes, so that's one issue. But another issue is the way in which ActiveRecord deals with inheritance. Only single table inheritance is supported via the user of a discriminator column. My issue with this is that there's no good way to support extra properties on a subclass - the properties would have to be added to the Users table and therefore without some trickery would be available to all User subtypes.</p>
<p>One possible solution for this is as follows:</p>
<pre><code class="ruby">class AbstractUser < ActiveRecord::Base
end

class AdminUser < AbstractUser
	has_one :admin_details
end</code></pre>
<p>In this case, we have another model - and therefore another table - which provides the AdminUser's extra properties. This can then be used as follows:</p>
<pre><code class="ruby">admin = AdminUser.new
admin.admin_details.direct_line = '+44 567 7890'</code></pre>
<p>This works fine, the values are off in a separate table and everything's separated out as I'd like. But the syntax is clunky. I don't really want to have to do admin.admin_details.direct_line, I want to do admin.direct_line. So I wrote a little extra method to do this:</p>
<pre><code class="ruby">class AdminUser < AbstractUser
	incorporates :admin_details
end</code></pre>
<p>All this does is set up a has_one as normal, but then provide extra methods for getting and setting all of the attributes of admin_details, meaning that admin.direct_line will work as expected. The code for incorporates has_one is up <a href="http://gist.github.com/312973">on github now</a> - it's the minimum that was required to get this to work, so please feel free to fork it. I do wonder if I'm missing something that's already built into Rails, but if I am, it's damn hard to find.</p>
<p><a href="http://gist.github.com/312973">This approach</a> makes me pretty happy overall - in the scenario I've got right now, I never actually need a base User, which is why I'm referring to it as AbstractUser, and it would really be better if that could never be instantiated. But it's a minor niggle, and the whole setup plays well with Rails' polymorphic routing and suchlike, and works with Authlogic too. I can already see some improvements, so I hope someone forks <a href="http://gist.github.com/312973">the gist</a> and I can learn something from Rubyists!</p>
