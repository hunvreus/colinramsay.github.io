---
layout: post
status: publish
published: true
title: My Solution Template
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 412
wordpress_url: http://colinramsay.co.uk/2008/01/27/my-solution-template/
date: !binary |-
  MjAwOC0wMS0yNyAwMTo1MzoxNyArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMS0yNyAwMDo1MzoxNyArMDAwMA==
categories:
- Visual Studio
- Development
tags: []
comments:
- id: 12789
  author: Filip Kinsky
  author_email: filip@filovo.net
  author_url: http://filovo.net
  date: !binary |-
    MjAwOC0wMS0yOCAxMDo1Njo1MSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yOCAwOTo1Njo1MSArMDAwMA==
  content: ! "thanks for providing your sample solution - it's really interesting
    to see how other people handle their projects... I have just few quick notes from
    my first look at your solution:\r\n- why don't you use NH2 instead of 1.2.0.4?\r\n-
    why do you prefer to map your controllers manually in controllers.config instead
    of mapping whole *.web assembly?\r\n- is your IRepository sufficient for you?
    I find it quite minimalistic - I prefer to have a richer set of methods eg. for
    SlicedFind etc... also I find it quite nice to implement validation in the Save()
    method, but this is another chapter I guess..\r\n\r\n//please note that I'm not
    much experienced Castle user, so my thoughts may be sometimes pointless :)"
- id: 12790
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wMS0yOCAxMTowMDo0NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yOCAxMDowMDo0NyArMDAwMA==
  content: ! "AFAIK NH2 isn't stable yet, and I've not had any real need to upgrade.
    Also, I RC3 of Castle uses NH 1.2.\r\n\r\nI don't have many controllers so it's
    not a big deal but the truth is I've never tried to map the entire assembly.\r\n\r\nThe
    projects I've been using the IRepo on are pretty basic and therefore so is the
    interface. I can certainly see lots of changes that can be made but I'm not one
    for adding stuff I'm not going to use right now."
---
<p>For a while I've been meaning to come up with a repeatable starting point for my projects. Not only is adding references, configuration and structure to a solution labourious, it's also pretty difficult to remember every step. Ideally, I wanted to be able to start a project with everything ready for me.</p>
<p>I spent a while today doing just that; a solution which matches the starting point for most of my projects. Firstly, there's a Monorail project with Windsor, NHibernate and logging integration switched on. All of the required DLL's have been moved into a Libs directory in the solution folder - the idea behind that is to allow a developer to be able to build the project without needing to install Monorail or any other components. Secondly, there's a unit tests project with a couple of folders; Controllers and Persistance. These suggest a future structure for this project, with Persistance being used to check the NH mappings work as expected. In addition it contains an NHTestBase class which allows my unit tests to run with a SqlCe database. Thirdly, a project called Core; this holds core functionality for the solution, such as entities and services, exceptions and utility methods.</p>
<p>The whole thing can be found here: http://dev.plastiscenic.co.uk/svn/projects/Plastiscenic.Sample/ but it's missing one thing - a good way to customise it. Namespaces, directory names, etc, need to be manually changed. For me that's still better than building it up from scratch but it's still a pain. If anyone's got any suggestions, I'd love to hear them.</p>
<p>One final note; this has pushed me to collect together a couple of classes I use often, and I've stolen Ayende's naming convention by creating <a href="http://dev.plastiscenic.co.uk/svn/projects/Plastiscenic.Commons/">Plastiscenic Commons</a>. This contains a repository implementation, stuff for setting up a SqlCe database, a static container accessor, and a few other bits. Nothing exciting but I always need them.</p>
<p>Feedback appreciated.</p>
