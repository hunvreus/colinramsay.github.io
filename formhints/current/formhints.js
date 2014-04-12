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
var FormHints = {

	// 
	addHints : function(elements) {

		for(var i = 0; i < elements.length; i++) {
			var element = elements[i];
			
			if(element.className == 'hasHint') {
				var hint = FormHints.getHintForElement(element);
				if(hint) { hint.style.display = 'none'; }
				element.onfocus = FormHints.showHint;
				element.onblur = function(e) { 
					var t = FormHints.getEventTarget(e);
				
					if(t && t.hint) {
						t.hint.style.display = 'none';
					}
				} ;
			}
		}
	},


	getEventTarget : function(e) {

		var target;

		if (!e) var e = window.event;
		if (e.target) target = e.target;
		else if (e.srcElement) target = e.srcElement;
		if (target.nodeType == 3) // defeat Safari bug
			target = target.parentNode;

		return target;
	},


	showHint : function(e) {

		var target = FormHints.getEventTarget(e);
		var hint = FormHints.getHintForElement(target);

		// <div class="formHint">
		//   <div class="topLeft"></div><div class="top"></div><div class="topRight"></div>
		//   <div class="left"></div><div class="content"></div><div class="right"></div>
		//   <div class="bottomLeft"></div><div class="bottom"></div><div class="bottomRight"></div>
		// </div>
		if(!target.hint) {
			var hintContainer = document.createElement('div');

			
			hintContainer.innerHTML = '<table cellpadding=0 cellspacing=0><tr><td class="topLeft"></td><td class="top"></td><td class="topRight"></td></tr><tr><td class="left"></td><td class="content">' + hint.innerHTML +'</td><td class="right"></td></tr><tr><td class="bottomLeft"></td><td class="bottom"></td><td class="bottomRight"></td></tr></table>';
			target.parentNode.appendChild(hintContainer);

			target.hint = hintContainer;
			
			target.hint.w = (target.hint.offsetWidth + 20) + 'px';
		}
		
		target.hint.style.width = target.hint.w;
		target.hint.style.position = 'absolute';
		target.hint.style.display = 'block';
		target.hint.style.float = 'none';
		target.hint.style.height = 'auto';

		target.hint.style.left = (target.offsetLeft + target.offsetWidth) + 'px';
		target.hint.style.top = (target.offsetTop - (target.offsetHeight / 2)) + 'px';
	},


	// 
	getHintForElement : function(element) {

		return document.getElementById('hint-' + element.name);
	}
}


// Dean Edwards/Matthias Miller/John Resig
function init() {
	// quit if this function has already been called
	if (arguments.callee.done) return;

	// flag this function so we don't do the same thing twice
	arguments.callee.done = true;

	// kill the timer
	if (_timer) clearInterval(_timer);

	// do stuff
	FormHints.addHints(document.getElementsByTagName('input'));
	FormHints.addHints(document.getElementsByTagName('select'));
};

/* for Mozilla/Opera9 */
if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
	document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
	var script = document.getElementById("__ie_onload");
	script.onreadystatechange = function() {
		if (this.readyState == "complete") {
			init(); // call the onload handler
		}
	};
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
	var _timer = setInterval(function() {
		if (/loaded|complete/.test(document.readyState)) {
			init(); // call the onload handler
		}
	}, 10);
}

/* for other browsers */
window.onload = init;
