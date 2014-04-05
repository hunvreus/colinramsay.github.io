---
layout: post
status: publish
published: true
title: XMLHttpRequest Details
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 93
wordpress_url: http://www.colinramsay.co.uk/?p=93
date: !binary |-
  MjAwNC0wNi0xNyAwMDo0NzoyOSArMDEwMA==
date_gmt: !binary |-
  MjAwNC0wNi0xNyAwMDo0NzoyOSArMDEwMA==
categories:
- The Feed-O-Matic
tags: []
comments: []
---
<p>It seems that XMLHttpRequest.readyState == 2 doesn't just refer to requests which work. State 2 is supposed to occur after send() has been called and the header is available. However, if a timeout occurs, that's still state 2 - even though the site headers aren't available. So what that give us is a good way of trapping timeout errors:</p>
<pre style="text-align:left;">
httpReadyStateChange: function(){
  if(Update.httpReq.readyState == 2){
    try{
      Update.httpReq.status;
    }catch(e){
      Update.httpReq.abort();
      Update.gochangeit(-10000);
      return;
    }
  }
}
</pre>
