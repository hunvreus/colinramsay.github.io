---
layout: post
status: publish
published: true
title: ! 'Gateshead Council Website Fail #2'
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 542
wordpress_url: http://colinramsay.co.uk/?p=542
date: !binary |-
  MjAwOS0wNy0yNCAxMTowMDozMyArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wNy0yNCAxMDowMDozMyArMDEwMA==
categories:
- Personal
- .NET
- Gateshead
- Fail
tags: []
comments:
- id: 25099
  author: Adam B
  author_email: adam.belshaw@internetware.co.uk
  author_url: ''
  date: !binary |-
    MjAwOS0wNy0yNCAxMjo1MjoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNy0yNCAxMTo1MjoxMCArMDEwMA==
  content: ! "http://www.driftingnowhere.co.uk/account/register.aspx\r\n\r\nSorry
    Colin, couldn't resist ;-) I tried registering the other day."
- id: 25100
  author: Colin Ramsay
  author_email: colinramsay@gmail.com
  author_url: http://colinramsay.co.uk
  date: !binary |-
    MjAwOS0wNy0yNCAxMzoyMzozMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNy0yNCAxMjoyMzozMyArMDEwMA==
  content: haha it's a fair point, I haven't even looked at that site in months. Then
    again, it's not paid for by our council tax either ;)
- id: 25101
  author: Adam B
  author_email: adam.belshaw@internetware.co.uk
  author_url: ''
  date: !binary |-
    MjAwOS0wNy0yNCAxMzozNjowOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNy0yNCAxMjozNjowOSArMDEwMA==
  content: Very true, I'm in Gateshead too but I know what to expect by now :-)
- id: 25102
  author: Jamie
  author_email: jamie.fraser@gmail.com
  author_url: http://www.thecodespring.com/
  date: !binary |-
    MjAwOS0wOC0wNSAxNDowODo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOC0wNSAxMzowODo0MyArMDEwMA==
  content: Baffling also that they appear to have CustomErrors turned off!
---
<p><a href="http://colinramsay.co.uk/wp-content/uploads/2009/07/Picture-4.png"><img src="http://colinramsay.co.uk/wp-content/uploads/2009/07/Picture-4-150x150.png" alt="Gateshead Council Website Fail #2" title="Gateshead Council Website Fail #2" width="150" height="150" class="alignright size-thumbnail wp-image-545" /></a>After yesterday's post I didn't really imagine that it'd attract the attention of anyone in the right departments - I guess I just assumed the problem would get fixed due to someone high up noticing it. What I didn't imagine is that the problem would get replaced by another totally different issue:<br />
<code><br />
Server Error in '/' Application.</p>
<p>Parser Error</p>
<p>Description: An error occurred during the parsing of a resource required to service this request. Please review the following specific parse error details and modify your source file appropriately. </p>
<p>Parser Error Message: Cannot create an object of type 'System.Web.UI.WebControls.Unit' from its string representation 'r_height' for the 'Height' property.</p>
<p>Source Error: </p>
<p>Line 1559:            &lt;div class=&quot;sys_news&quot;&gt;<br />
Line 1560:              &lt;div class=&quot;sys_standardrepeater&quot;&gt;<br />
Line 1561:                &lt;asp:literal visible=&quot;false&quot; id=&quot;D2_Count&quot; runat=&quot;server&quot; text=&quot;0&quot; /&gt; &lt;contensis_controls:dataviewdatalist id=&quot;D2&quot; runat=&quot;server&quot; repeatlayout=&quot;Flow&quot; cssclass=&quot;sys_standardRepeater&quot; height=&quot;r_height&quot; repeatdirection=&quot;Vertical&quot; repeatcolumns=&quot;1&quot; shuffledataset=&quot;False&quot; displaytype=&quot;SpanLayout&quot; onupdatecommand=&quot;dlUpdateCommand&quot; oncancelcommand=&quot;dlCancelCommand&quot; oneditcommand=&quot;dlEditCommand&quot; ondeletecommand=&quot;dlDeleteCommand&quot; onitemcommand=&quot;Link_Data_Click&quot; datakeyfield=&quot;PageID&quot;&gt;&lt;itemtemplate&gt;&lt;% D2_Count.Text=cstr(clng(D2_Count.Text)+1) %&gt;<br />
Line 1562:                &lt;h2 class=&quot;sys_repeaterItemInner&quot;&gt;<br />
Line 1563:                  &lt;%# CustomProcessing_D2(DataBinder.Eval(Container.DataItem,&quot;newsHeading&quot;),&quot;newsHeading&quot;) %&gt;</code></p>
<p>What sort of process is in place to allow a developer to replace a known failing page with another failing page? Surely, knowing that the first version was failing you'd be double-eager to check the latest upload is working? Baffling.</p>
