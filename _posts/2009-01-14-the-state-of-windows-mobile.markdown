---
layout: post
status: publish
published: true
title: The State of Windows Mobile
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 505
wordpress_url: http://colinramsay.co.uk/?p=505
date: !binary |-
  MjAwOS0wMS0xNCAyMDoyODoxMSArMDAwMA==
date_gmt: !binary |-
  MjAwOS0wMS0xNCAxOToyODoxMSArMDAwMA==
categories:
- .NET
- Microsoft
- Development
- Windows Mobile
- Compact Framework
tags: []
comments:
- id: 23348
  author: The State of Windows Mobile - Colin Ramsay -
  author_email: ''
  author_url: http://www.lostechies.com/blogs/colin_ramsay/archive/2009/01/14/the-state-of-windows-mobile.aspx
  date: !binary |-
    MjAwOS0wMS0xNCAyMTowMzozNCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0xNCAyMDowMzozNCArMDAwMA==
  content: ! '[...] post was also published on my personal blog.  Posted Jan 14 2009,
    01:57 PM by cramsay Filed under: windows mobile, compact [...]'
- id: 23369
  author: Senthil
  author_email: senthil.thecoder@gmail.com
  author_url: http://msmvps.com/blogs/senthil
  date: !binary |-
    MjAwOS0wMS0xNyAxMzo1NjozMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0xNyAxMjo1NjozMCArMDAwMA==
  content: WM 6 Professional provides you touch capabilities, that are missing in
    WM 6.0 Standard. (button controls, for example).
---
<p>"Have you done any Windows Mobile development?"<br />
"A tiny bit. Isn't it just like Winforms but on a phone?"</p>
<p>And from such an innocent beginning, a world of pain did explode into my universe. Just like Winforms on a phone is it? What's the difference between the Compact Framework, Smartphone development, Pocket PC development, Windows Mobile? So many terms! So little time!</p>
<p>Windows Mobile is the operating system, just like Windows Vista. The Compact Framework is just like the .NET Framework on the desktop. As for the difference between a Smartphone and a Pocket PC, well, you've got me there. I picked Smartphone because my device had phone functionality and it seems to be working so far. There are separate SDKs for each, so I assume there are some key differences which escape me. With Windows Mobile 6, the Smartphone and Pocket PC SDKs are now Windows Mobile 6 Standard and Windows Mobile 6 Professional, respectively. I think.</p>
<p>Actually I think the real difference in these is the templates for projects you create and the emulators you are provided with. Professional, or Pocket PC, provides emulators for bigger screens. Microsoft has <a href="http://www.microsoft.com/downloads/details.aspx?familyid=06111A3A-A651-4745-88EF-3D48091A390B&displaylang=en">this to say</a> about the naming kerfuffle:</p>
<blockquote><p>
With Windows Mobile 6, we are revising our SKU taxonomy and naming to better align our brand and products with the realities of today’s mobile device marketplace. The historical form-factor based distinction between Windows Mobile powered Smartphone and Windows Mobile powered Pocket PC Phone Edition is blurring dramatically. We want our taxonomies and terminology to evolve to better reflect the evolution of the mobile device industry.</p></blockquote>
<p>So in order to reflect the blurring of the mobile device form factors, they've changed from having SDKs named after the types of device to SDKs named "Standard" and "Professional". Hmm. How about having a single SDK called "Mobile Device SDK" and allow me to pick the device dimensions from within my project on the fly? Back at the start of this tale, I assumed that picking Windows Mobile for development would allow us to target a range of different devices, large and small, and in fact I can do that. I can deploy my application to a Windows Mobile phone with a big screen and to one with a small screen. The SDK split seems pretty artificial with that in mind.</p>
<p>Naming conventions and confusions aside, it is nice to be able to write against a single API and deploy to any Windows Mobile device. Or it would be if it worked.</p>
<p>My bugbear here is with a particular class: CameraCaptureDialog. Take the Samsung Omnia for example. You can certainly pop up the camera using CCD.ShowDialog(), but can you retrieve the filename of the image you took? You cannot. That's because the Omnia's camera supports taking multiple images one after the other until you explicitly close it.</p>
<p>How about the HTC Diamond? Well that opens fine, and returns a filename too, but if you try and re-open the camera straight after processing the filename, to allow the user to take another photo, it fails silently and doesn't show the camera. If you try and do the same thing with the HTC Touch, it freezes.</p>
<p>Part of the issue is that the Compact Framework leaves too much up to the manufacturers and doesn't give enough control to the developer. We can set the resolution of the camera for example, but we have no shortcut of setting it to the maximum resolution available. If you try and set it to a resolution which is not supported, some devices reset silently to a much lower resolution.</p>
<p>Microsoft need to extend camera support for .NET developers and give a lower level of access. They need to push device manufacturers to adhere to the Windows Mobile APIs and be more precise in how they are specified. And they need to simplify and modernise their mobile development framework so that developers can be fully aware of all the options available to them.</p>
