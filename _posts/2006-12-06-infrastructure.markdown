---
layout: post
status: publish
published: true
title: Infrastructure
author: admin
author_login: admin
author_email: colinramsay@gmail.com
excerpt: ! "Over the past three months I've been working on a project all on my lonesome.
  Despite the fact that there's just me developing on this, there are actually four
  (yes) computers involved in the process.\r\n\r\n1. Development machine (Windows
  Vista)\r\n2. Build server (Windows Server 2003)\r\n3. Source control server (FreeBSD
  I think)\r\n4. Deployment server (Windows Server 2003)\r\n\r\nWriting this I'm thinking:
  \"do I really need four computers?\"\r\n"
wordpress_id: 340
wordpress_url: http://colinramsay.co.uk/2006/12/06/infrastructure/
date: !binary |-
  MjAwNi0xMi0wNiAyMzozMjo0OSArMDAwMA==
date_gmt: !binary |-
  MjAwNi0xMi0wNiAyMzozMjo0OSArMDAwMA==
categories:
- .NET
- Projects
- Agile Development
- Management
tags: []
comments: []
---
<p>Over the past three months I've been working on a project all on my lonesome. Despite the fact that there's just me developing on this, there are actually four (yes) computers involved in the process.</p>
<p>1. Development machine (Windows Vista)<br />
2. Build server (Windows Server 2003)<br />
3. Source control server (FreeBSD I think)<br />
4. Deployment server (Windows Server 2003)</p>
<p>Writing this I'm thinking: "do I really need four computers?"<br />
<a id="more"></a><a id="more-340"></a><br />
I do. I could reduce it to three by combining my source control and build servers, but considering the way I set them up it doesn't make sense. My development machine was first, then source control. So with a working *nix source control box, when I decided to set up a CruiseControl .NET based build server, it really wasn't worth the effort migrating Subversion over. It'd take me half a day and I can't see any reason for it.</p>
<p>So anyway, I write my code and commit it to Subversion. Then my build server grabs it and runs automated tests (notifying me if there are any failures), and uploads the resulting build to a directory on the server which is named after the Subversion revision.</p>
<p>Ten minutes after I make a commit, I can log on to the deployment server and type "deploy xxx", where xxx is the revision I just made. That command will replace the production code with the new build. If it turns out to be bad code, and it shouldn't, because my automated tests on the build server have screened it, then I type "rollback" and the previous build gets put back in place.</p>
<p>That's why I've titled this post "Infrastructure". This setup means I can write code and not have to worry about <em>anything else</em>. It's all automated, it's all tested.</p>
<p><hints id="hah_hints"></hints></p>
