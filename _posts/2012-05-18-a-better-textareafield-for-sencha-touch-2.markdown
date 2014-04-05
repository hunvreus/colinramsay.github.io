---
layout: post
status: publish
published: true
title: A Better TextAreaField for Sencha Touch 2
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 770
wordpress_url: http://colinramsay.co.uk/?p=770
date: !binary |-
  MjAxMi0wNS0xOCAxMjoyMjoyMyArMDEwMA==
date_gmt: !binary |-
  MjAxMi0wNS0xOCAxMToyMjoyMyArMDEwMA==
categories:
- Personal
- Javascript
- Sencha
tags: []
comments: []
---
<p><a href="http://colinramsay.co.uk/wp-content/uploads/2012/05/iOS-Simulator-Screen-shot-18-May-2012-12.22.57.png"><img src="http://colinramsay.co.uk/wp-content/uploads/2012/05/iOS-Simulator-Screen-shot-18-May-2012-12.22.57-200x300.png" alt="" title="iOS Simulator Screen shot 18 May 2012 12.22.57" width="200" height="300" class="alignleft size-medium wp-image-774" /></a></p>
<p>The ST2 TextAreaField is really rather poor when it comes to editing lots of text. Scrolling through is awkward, the virtual keyboard gets in the way, and the user experience is sub-optimal.</p>
<p>I put together a component which tries to address this, and you can <a href="https://github.com/colinramsay/st2-bettertextarea">find my BetterTextArea on github</a>.</p>
<p>In read only mode, the field will pop up a full-screen viewer with custom scrolling to allow the content to be read more easily. In editable mode, the viewer is fills the space in the window not taken up by the virtual keyboard, and again allows scrolling to take place with a single finger gesture.</p>
<p><a href="https://github.com/colinramsay/st2-bettertextarea">Try it out and fork it</a> if you have any suggestions!</p>
