---
layout: post
status: publish
published: true
title: Once... Twice... Then Reuse
author: Colin Ramsay
author_login: colinramsay
author_email: colinramsay@gmail.com
author_url: http://colinramsay.co.uk
wordpress_id: 441
wordpress_url: http://colinramsay.co.uk/?p=441
date: !binary |-
  MjAwOC0wNi0xNiAxNzowNToyMyArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNi0xNiAxNjowNToyMyArMDEwMA==
categories:
- Monorail
- C#
- Javascript
- Refactoring
- Ext
tags: []
comments:
- id: 21802
  author: Jamie McKenzie
  author_email: jamie@agentdesign.co.uk
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0wNiAxNzoxMzo1OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0wNiAxNjoxMzo1OCArMDEwMA==
  content: ! "Can you post the ext code for the standardGrid class you created, I've
    been searching around for examples of extending the gridPanel with all the plugins
    and standard config defined so you can just sub class it, but haven't found any
    yet. I'm suprised no one has written a tutorial on the ext website on how to make
    reusable grid components.\r\n\r\nThanks"
---
<p>I'm working with the awesome ExtJS framework again, creating an administrative interface to a huge amount of data. Each screen on this interface is basically a pageable grid with an editor window which pops up if you click a row. The grids can be sorted, and a separate filter area allows you to narrow down the items displayed on the grid in a manner unique to each screen.</p>
<p>The first time I wrote something like this using Monorail and ExtJS, I'd estimate that the javascript code was about 300 lines and the C# was maybe 150. Bear in mind that these screens, while differing due to the data being displayed, were essentially just CRUD interfaces. That means that to create a new screen, I'd be copying and pasting a lot of very similar code.</p>
<p>I'm sure you've been in this sitation before. If you're really only going to be using this code in one or two places, there may be little value in making it a bit more generic. However, as soon as you break past that and find yourself copying and pasting the same code over and over, it's a sure sign that you need to step back and pull out common functionality. That'll provide three benefits:</p>
<ol>
<li>Less code means less to maintain</li>
<li>It's easier to create a new screen (copy/paste is never nice)</li>
<li>Code reuse means silly errors are more quickly caught</li>
</ol>
<p>In my situation I first created an abstract CrudController<T> class, which accepts a type parameter of the entity which you're Creating, Reading, Updating and Deleting. Later I changed this class to CrudController<T, TSpec> to allow me to add <a href="http://www.ayende.com/Blog/archive/2007/10/23/Specifying-Specifications.aspx">search specifications</a> in a generic way. This class contains all of the actions you'd expect for CRUD as well as some for writing out JSON strings.</p>
<p>In the ExtJS side of things, I was able to <a href="http://extjs.com/learn/Tutorial:Extending_Ext2_Class">subclass</a> the GridPanel component and have a component that would automatically have a PagingToolbar, a particular click handler, and other default settings. I was also able to tailor the arguments to reduce the amount of code I needed to write to create it. Here's a simple example.</p>
<pre><code class="javascript">this.grid = new App.standardGrid({
	cm: new Ext.grid.ColumnModel([{
			header: 'Id',
			dataIndex: 'Id'
		}, {
			header: 'Created',
			dataIndex: 'CreatedOn',
			renderer: function(val) {
				return val.format('l d F Y');
			}
		}]),
	fields: [
				{name:'Id', type:'int'},
				{name:'CreatedOn', type:'date'}
			],
	url: '/admin/quote/getjsonlist.castle',
	edit: this.edit,
	scope: this
});</code></pre>
<p>Secondly, I could create a subclassed Ext.Window which would give me a better reusable editor dialog. Here's how I defined that:</p>
<pre><code class="javascript">App.window = Ext.extend(Ext.Window, {
	height: 500,
	width: 500,
	modal: true,
	resizable: false,
	draggable: false,
	closable: false,
	bodyStyle: 'background: #eee'
});</code></pre>
<p>As you can see, this is just a matter of giving sane defaults for a modal window, but later I subclassed App.window itself to create App.formWindow which was much more powerful.</p>
<p>These three steps dramatically reduced the code required to create a new admin screen in my application. More importantly, I cut the amount of boilerplate code I was copying every time to zero, which meant the code I did have to write was all important stuff. Less wading through identikit javascript means I'm a much happier developer!</p>
