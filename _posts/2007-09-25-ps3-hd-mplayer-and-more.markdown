---
layout: post
status: publish
published: true
title: PS3 & HD - MPlayer and More...
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 393
wordpress_url: http://colinramsay.co.uk/2007/09/25/ps3-hd-mplayer-and-more/
date: !binary |-
  MjAwNy0wOS0yNSAwMDo1MTowMCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOS0yNCAyMzo1MTowMCArMDEwMA==
categories:
- Personal
- PS3
tags: []
comments: []
---
<p>Last week we went on a spending spree and bought a new 42 inch LCD HDTV - the Sharp LC42XD1EA to be exact. Notice the "A" on the end, as that signifies a newer revision than the earlier LC42XD1E. I bought it from www.24electric.com who I would definitely recommend, they had the lowest price and delivered very quickly. I had some questions after I placed the order and these were dealt with very quickly and in a helpful way.</p>
<p>The TV itself is great, I'm really pleased, and so I felt obliged to get an HD source to put it to the test. I bought a PS3 from HMV with Motorstorm, some F1 game and two Bluray DVDs.</p>
<p>I wanted to use the PS3 as a media center in the same way I used my old XBox with <a href="http://www.xboxmediacenter.com/">XMBC</a>, except this time it would support HD formats (my TV goes up to 1080p). Sony doesn't really allow you to play very many video formats from the main GameOS screen, but fortunately the PS3 allows me to install Linux, so I grabbed <a href="http://www.terrasoftsolutions.com/products/ydl/">Yellow Dog Linux </a>and was up and running very quickly. The E17 window manager which it ships with is far and away the best Linux desktop experience I've ever had, but I switched to Gnome, the other available desktop, to allow me to follow a tutorial on installing MPlayer.</p>
<p>After much gnashing of teeth I've managed to get a range of mixed results. I <a href="http://www.gossamer-threads.com/lists/mythtv/users/258573">read this report</a> that someone was able to get MPlayer running 1080p content within X, but I can't reproduce that. They say they are "using ffmpeg to decode... using the X11 video output", which on the commandline I interpret as:</p>
<pre><code>mplayer -vfm ffmpeg -vo x11 filename</code></pre>
<p>I couldn't get this to work with either a 720p Prison Break episode I downloaded, or a 1080p movie trailer. MPlayer kept reporting that the system was too slow for it to work.</p>
<p>Instead I rebooted and at the kboot prompt (blink and you'll miss it) typed "ydltext" to start Yellow Dog in text-only mode. From there I tried running mplayer in framebuffer mode:</p>
<pre><code>mplayer -vo fbdev filename</code></pre>
<p>This allowed my 1080p trailer to play as smooth as you like. Nothing I could do would make the Prison Break episode work to my satisfaction.</p>
<p>However, it did boost my confidence that the PS3 will be able to do this sort of thing in the near future. The Prison Break episode was a Matroska file, so this really must be a codec issue somehow. My knowledge isn't strong enough to say for certain but I really hope someone can figure out a cohesive solution which caters for the huge range of video files I could play on XBMC.</p>
<p>Incidentally, I'd like to have an option in the GameOS to boot into another OS, and that way someone could come up with a MediaOS that I could run from the GameOS. At the moment you have to choose the default OS as YDL and boot to that, then back to the GameOS from there. I'd prefer to do it the other way round.</p>
<p>It's taken a lot of forum searching to scrape up enough information to get this far. The PS3 isn't quite there yet but with a push from one of the interested parties (MythTV, FreeVO, MPlayer, Geexbox, XBMX... even Sony) then it could become an enthusiasts dream.</p>
