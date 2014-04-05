---
layout: post
status: publish
published: true
title: TickerTape News Component Update
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 370
wordpress_url: http://colinramsay.co.uk/2007/05/08/tickertape-component-update/
date: !binary |-
  MjAwNy0wNS0wOCAxNjo1MzozMyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNS0wOCAxNTo1MzozMyArMDEwMA==
categories:
- Projects
- Javascript
- TickerTape
tags: []
comments:
- id: 20898
  author: Sam
  author_email: cognosc@hotmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0xOSAyMjo0ODozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xOSAyMTo0ODozNSArMDEwMA==
  content: ! "Hi Colin\r\n\r\nYour ticker is wonderful and very configurable - smooth
    scrolling too :)\r\nOnly one thing - it seems to take an awful lot of CPU time
    in Firefox - is this\r\na firefox thing or is there somewhere in the .js I can
    tweak the amount of\r\nwork that is going on?\r\n\r\nThanks again for all your
    hard work which must have gone into this..\r\nIt is not taken for granted :)\r\n\r\nSam\r\nFinland"
- id: 20899
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOC0wNi0xOSAyMzowNTowMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0xOSAyMjowNTowMyArMDEwMA==
  content: ! "Hi Sam,\r\n\r\nI'm not seeing this in FF3, and didn't see it in FF2
    either as far as I can remember. The scroll function starts on line 188 of the
    main tickertape.js file if you want to take a look, but you're the first to mention
    this issue, so maybe the problem lies in your local machine?"
- id: 21594
  author: Tony Jewell
  author_email: tony.jewell@cregganna.com
  author_url: http://www.cregganna.com
  date: !binary |-
    MjAwOC0wNy0yMiAwMDowNDoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0yMSAyMzowNDoxMCArMDEwMA==
  content: It is using a 20ms timout which is pretty much a tight for loop even on
    modern fast machines. I was at an o2.ie website and laptop fan came on, cpu to
    100% and battery started to drain. Tracked the code down to coming from here.
    There's a price to pay for smooth scrolling. Colin - I think you should reduce
    CPU demands of your script. Thx anyway - nice bit of js.
- id: 21952
  author: =IceBurn=
  author_email: jdnr-online@sapo.pt
  author_url: http://iceburn.info
  date: !binary |-
    MjAwOC0wOC0yMSAxNToyNjozNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0yMSAxNDoyNjozNiArMDEwMA==
  content: ! "For use in Opera &gt;= 9, use it inside a div, or you will get the page
    to scrool in some situations.\r\nSo something like this should work just fine:\r\n\r\n\r\n
    \r\n var ticker = new TickerTape('demo-data.txt', 'styledTickerTape', 4000);\r\n\r\n\r\nNotice
    the properties position, width and height! Also combine the desired width and
    height in the css TickerTape file.\r\n\r\nHope this helps."
- id: 21953
  author: =IceBurn=
  author_email: jdnr-online@sapo.pt
  author_url: http://iceburn.info
  date: !binary |-
    MjAwOC0wOC0yMSAxNTozMDowOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0yMSAxNDozMDowOCArMDEwMA==
  content: ! "Ups... the blog strips HTML tags....\r\n\r\nSo, what you should do is
    put the javascript calls inside a div with the following properties:\r\n\r\nposition:
    absolute; \r\nwidth: 150px;  \r\nheight: 140px;\r\n\r\nCheers."
- id: 21954
  author: =IceBurn=
  author_email: jdnr-online@sapo.pt
  author_url: http://iceburn.info
  date: !binary |-
    MjAwOC0wOC0yMSAyMToxODoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0yMSAyMDoxODoxMCArMDEwMA==
  content: ! "Just notice, it has a bug in IE 7. It's like it always add 1px to the
    height to scroll up.\r\nWorks fine in Opera and FF."
- id: 23191
  author: Bob
  author_email: bob.santosjr@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0yOSAwMzoyNDozOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0yOSAwMjoyNDozOCArMDAwMA==
  content: ! "Hi Colin!\r\n\r\nThanks for this great work! :)\r\n\r\nBut I have to
    agree with Sam, it's taking a lot of CPU time, is there anyway to overcome this?
    and also if I set the scroll interval to less than 1500ms it fails to load the
    next set of data.\r\n\r\nBy the way, in my version of your ticker tape, I added
    a functionality to reverse the direction of the scroll so that the user can go
    back to the previous items.\r\n\r\nLastly, if it's not too much, I'm wondering
    if there is a way to change the scroll speed of the ticker tape after it's created?
    Like if I put a button which will toggle the speed to 1500 ms and then when I
    click it again it will go back to 2500ms.\r\n\r\nThanks and hoping to hear from
    you soon!\r\n\r\nCheers!"
---
<p>I've updated my javascript TickerTape to version 1.1, and introduced a couple of new features. Firstly, one which was requested by a few people, rolling over the ticker now causes it to stop scrolling until you move out again. This prevents the item you're interested in zipping off the screen before you can click it.</p>
<p>Secondly, the ticker can now be configured to scroll horizontally, which opens up a whole new slew of applications. You can see both of these features in action in the new horizontal demo, available in the archive. The current version of the TickerTape component can always be found here:</p>
<p><a href="http://javascript-ticker-tape.googlecode.com/files/tickertape-1.0.zip">Latest JavaScript TickerTape Component</a></p>
<p>Incidentally, because IE7 doesn't allow XMLHttpRequests to the local filesystem, you'll have to upload the demos to your own webserver rather than view them on your own PC. They work locally in Firefox just fine.</p>
<p><strong>Update:</strong> The <a href="http://colinramsay.co.uk/diary/2009/01/14/javascript-tickertape-on-google-code/">TickerTape is now available on Google Code</a>. Downloads have been updated to reflect this.</p>
