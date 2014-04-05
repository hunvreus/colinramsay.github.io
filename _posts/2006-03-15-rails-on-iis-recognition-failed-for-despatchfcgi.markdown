---
layout: post
status: publish
published: true
title: Rails on IIS - Recognition Failed for despatch.fcgi
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 297
wordpress_url: http://www.colinramsay.co.uk/?p=297
date: !binary |-
  MjAwNi0wMy0xNSAyMToxMTozMyArMDAwMA==
date_gmt: !binary |-
  MjAwNi0wMy0xNSAyMToxMTozMyArMDAwMA==
categories:
- Ruby on Rails
tags: []
comments: []
---
<p>I came across this when we were setting up Rails for IIS. To fix it, place the following in request.rb in your rails stuff:</p>
<blockquote><p>def request_uri<br />
  if uri = env['REQUEST_URI']<br />
    (%r{^\w+\://[^/]+(/.*|$)$} =~ uri) ? $1 : uri # Remove domain, which webrick puts into the request_uri.<br />
  else # REQUEST_URI is blank under IIS - get this from PATH_INFO and SCRIPT_NAME<br />
    script_filename = env['SCRIPT_NAME'].to_s#.match(%r{[^/]+$})<br />
    uri = env['PATH_INFO']</p>
<p>    uri = uri.sub("#{script_filename}", "") unless script_filename.nil?</p>
<p>    #we must have our rewrite rule look like<br />
    #RewriteRule ^(/[^.]*)\?([^.]*)$ /dispatch.fcgi?$1*$2<br />
    #It replaces the first '?' with '*'<br />
    parts = env['QUERY_STRING'].split("*")</p>
<p>    if parts.length > 1<br />
      env['QUERY_STRING'] = parts[1]<br />
      uri = parts[0]<br />
      env['REQUEST_URI'] = uri + '?' + env['QUERY_STRING']<br />
    else<br />
      #if we didn't have a *real* query string,<br />
      #then set the uri to the query string IIS gives us<br />
      uri << env['QUERY_STRING'] unless env['QUERY_STRING'].nil?<br />
      env['QUERY_STRING'] = ""<br />
      env['REQUEST_URI'] = uri<br />
    end<br />
    uri<br />
  end<br />
end </p></blockquote>
<p>And this in your site httpd.ini:</p>
<blockquote><p># Ruby on Rails<br />
IterationLimit 0<br />
RewriteRule ^(/[^.]*)\?([^.]*)$ /dispatch.fcgi?$1*$2RewriteRule ^(/[^.]+)$ /dispatch.fcgi?$1</p></blockquote>
<p>Thanks to <a href="http://www.pod2mob.com/">Chris Lang</a> for this.</p>
