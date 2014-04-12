//
// Copyright (c) 2007 Colin Ramsay
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

//
// TickerTape v1.0 - http://colinramsay.co.uk/tickertape/
// A vertically scrolling ticker-tape component which dynamically loads in articles using ajax.
//
// Usage: var ticker = new TickerTape('tickerTape', 'dataurl.php', 5000);
//
function TickerTape(url, cssClassName, scrollInterval) {

	// Request JSON data from this url.
	this.dataUrl = url;

	// The classname which will be assigned to the tickertape container
	// Note: this is assigned in addition to 'basicTickerTape'.
	this.cssClassName = cssClassName;

	// How many milliseconds to wait between scrolling an item.
	this.scrollInterval = scrollInterval;

	// The id of the last item retrieved from the dataUrl.
	this.lastId = 0;

	// The total number of pixels which have been scrolled since the
	// ticker started. Used to keep track of where to scroll to next.
	this.totalScroll = 0;

	// Used to track the window.setInterval id for the scroll
	// so that we only have one scroll going at once.
	this.scrollIntervalId = null;

	// The number of items returned in the last update.
	this.numberReturned = 0;

	// Tracks the item within the container which was just scrolled.
	this.currentChild = 0;

	// Start it up!
	this.init();
};


// Creates a <div> element at the point where the TickerTape script
// was included. The <div> has a class of tickerTape and a random id.
TickerTape.prototype.createDom = function() {

	// Generate a random number and use it to build for the id of the <ul>
	var randomId = "tickerTape" + Math.floor(Math.random()*999);
	
	// Write out a <div> element to the calling document
	document.write('<div class="'+ this.cssClassName +' basicTickerTape" id="' + randomId +'" style="overflow:hidden;"><ul style="margin: 0;"></ul></div>');
	
	// Assign the new <div> element to a property of the tickertape class for easy access
	this.container = document.getElementById(randomId).getElementsByTagName('ul')[0];
}


// Calls the server with lastId we received to get the next lot of items back. Note
// that this.lastId will be 0 if this is the first time the update has been called
TickerTape.prototype.update = function() {

	// We need to be able to handle a dataUrl with existing querystring parameters
	var concatCharacter = this.dataUrl.indexOf('?') > -1 ? '&' : '?';
	var urlWithParams = this.dataUrl + concatCharacter + "lastId=" + this.lastId;

	// Make a call to the server, passing through a function
	// which will be called when the update is complete
	var xhr = new XMLHttpRequest();

	// Set up a callback function
	xhr.onreadystatechange = this.updateCallback.simpleBind(this, xhr);

	// Make the request
	xhr.open("GET", urlWithParams);
	xhr.send("");
}


// The server should return an array of objects that we can use
// to form an item on the tape.
TickerTape.prototype.updateCallback = function(e) {

	// Only run this if the XHR has finished loading
	if (e.readyState != 4) {
		return;
	}

	// Probably should swap this call to eval for something safer?
	var json = eval(e.responseText);

	// Remember the number returned in this request so we can use it elsewhere
	this.numberReturned = json.length;

	// Now loop through all the returned items and build HTML from them
	for(var i = 0; i < this.numberReturned; i++) {

		// Produces HTML like this:
		// <li><p>Title</p><p><a href="Url">LinkText</a></p>
		var listItem = document.createElement('li');
		var title = document.createElement('p');
		var anchorHolder = document.createElement('p');
		var anchor = document.createElement('a');

		title.innerHTML = json[i].Title;
		anchor.href = json[i].Url;
		anchor.innerHTML = json[i].LinkText;

		anchorHolder.appendChild(anchor);
		listItem.appendChild(title);
		listItem.appendChild(anchorHolder);

		// Add the built item to the document
		this.container.appendChild(listItem);
		
		// Track the Id of the items which are added
		// so that we can send it back to the server
		// on the next update.
		this.lastId = json[i].Id;
	}
}


// Scrolls the innerContainer by an amount determined by the current element height.
TickerTape.prototype.scroll = function() {

	// If an existing scroll is already taking place, stop it
	if(this.scrollIntervalId) {
		window.clearInterval(this.scrollIntervalId);
		this.scrollIntervalId = null;
	}

	// Find the element we are about to scroll and compute its top and bottom margins
	var element = this.container.childNodes[this.currentChild];
	var amountToScroll =  this.getElementHeight(element);

	// "Save" the current context so it can be used in the setInterval callback
	var context = this;

	// 
	context.scrollIntervalId = window.setInterval(function() {

			context.totalScroll++;
			amountToScroll--;

			context.container.style.top = (-context.totalScroll) + 'px';

			if(amountToScroll == 0) {
				window.clearInterval(context.scrollIntervalId);
				context.scrollIntervalId = null;
			}
		}, 20);

	// 
	this.currentChild++;

	// Since we've scrolled some elements we may need to load more
	// to ensure there are always items in the container.
	this.updateIfNecessary();
}


// Only calls update if the currentChild has passed the update threshold.
TickerTape.prototype.updateIfNecessary = function() {
	var updateThreshold = Math.round(this.numberReturned / 2) - 1;
	var mod = this.currentChild % Math.round(this.numberReturned / 2);

	if(mod >= updateThreshold) {
		this.update();
	}
}


// Called when the TickerTape class is instantiated.
TickerTape.prototype.init = function() {
	this.createDom();
	this.update();

	var timeoutCallback = this.scroll.simpleBind(this);
	window.setInterval(function() { timeoutCallback(); }, this.scrollInterval);
}


// Computes the height including top and bottom margins of an element
TickerTape.prototype.getElementHeight = function(element) {

	var height = element.offsetHeight;
	var topMargin = 0;
	var bottomMargin = 0;

	if (element.currentStyle) {
		topMargin		= element.currentStyle['marginTop'];
		bottomMargin	= element.currentStyle['marginBottom'];
	} else if (window.getComputedStyle) {
		topMargin = document.defaultView.getComputedStyle(element,null).getPropertyValue('margin-top');
		bottomMargin = document.defaultView.getComputedStyle(element,null).getPropertyValue('margin-bottom');
	}
	
	var isSafari = false;
	
	if(navigator.vendor && navigator.vendor.indexOf('Apple') > -1) {
		isSafari = true;
	}
	
	if(!isSafari) {
		topMargin = topMargin.replace('px', '');
		bottomMargin = bottomMargin.replace('px', '');
	}

	if(topMargin == 'auto') topMargin = 0;
	if(bottomMargin == 'auto') bottomMargin = 0;

	return parseFloat(height) + parseFloat(topMargin) + parseFloat(bottomMargin);
}


// Simple version of the Prototype library's bind() which will only work in
// this case, but doing it this way removes the need for Prototype's $A support.
Function.prototype.simpleBind = function() {

	var	__method = this;
	var args =	[arguments[1]];
	var object =	arguments[0];

	return function() {
		return __method.apply(object, args);
	}
}


// Cross browser way of getting XMLHttpRequest from Jonathan Snook, see:
// http://snook.ca/archives/javascript/short_xmlhttprequest_abstraction/
/*@cc_on
@if (@_jscript_version >= 5 && @_jscript_version < 5.7)
  function XMLHttpRequest() {
    try{
      return new ActiveXObject('Msxml2.XMLHTTP');
      }catch(e){}
  }
@end
@*/