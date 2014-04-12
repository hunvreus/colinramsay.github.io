 
// Easy namespacing
var Plastiscenic = {};
 
 // Provides ability to bind scope to a function, but will use any existing implementation first
if (!Function.prototype.bind) {
	// http://www.digital-web.com/articles/scope_in_javascript/
	Function.prototype.bind = function (obj) {
		var method = this;
		var temp = function() {
			return method.apply(obj, arguments);
		};
	 
		return temp;
	};
}
 
Plastiscenic.intellisense = function(config) {

	this.showing = null;
	this.resultClick = null;
	this.debugContainer = null;
	this.config = config;
	this.t = this.config.tokenizer;

	if(!config.textarea) alert('You must pass a textarea property into the config.');
	
	// Main event handler, triggered onkeydown in the configured textarea
	this.config.textarea.onkeydown = function(event) {
		event = event || window.event;
		
		// Tab key moves to the results picker.
		if(event.keyCode === 9) {
			this.focusResults();
			return false;
		}
	
		// Attempt to clear any existing results picker.
		this.remove();
		
		// Full stop / dot character is the only intellisense trigger right now
		if(event.keyCode === 190) {
			
			var pos = this.getCursorPosition(this.config.textarea);

			var text = this.config.textarea.value.substring(0, pos);
			var results = this.getResults(this.t.getToken(text));
			var dims = this.getTextSize(text, this.config.textarea);
			var position = {x: this.config.textarea.offsetLeft + dims.width, y: this.config.textarea.offsetTop + dims.height};

			this.display(eval(results), position, pos);					
		}
	}.bind(this);
	 
	// Send focus to the first results link if any are available.
	this.focusResults = function() {
		if(this.showing) {
			var resultAnchors = this.showing.getElementsByTagName('a');
			if(resultAnchors.length > 0) resultAnchors[0].focus();
		}
	};

	// Get the current position of the caret in the passed node
	// http://blogs.nitobi.com/alexei/wp-content/uploads/2008/01/getcaretselection3.js
	this.getCursorPosition = function(node) {
		var docObj = node.ownerDocument;
		var result = {start:0, end:0, caret:0};
		
		if (navigator.appVersion.indexOf("MSIE")!=-1) {
			if (node.tagName.toLowerCase() == "textarea") {
				if (node.value.charCodeAt(node.value.length-1) < 14) {
					node.value=node.value.replace(/34/g,'')+String.fromCharCode(28);
				}
				var oRng = docObj.selection.createRange();
				var oRng2 = oRng.duplicate();
				oRng2.moveToElementText(node);
				oRng2.setEndPoint('StartToEnd', oRng);
				result.end = node.value.length-oRng2.text.length;
				oRng2.setEndPoint('StartToStart', oRng);
				result.start = node.value.length-oRng2.text.length; 
				result.caret = result.end;
				if (node.value.substr(node.value.length-1) == String.fromCharCode(28)) {
					node.value = node.value.substr(0, node.value.length-1);
				}			
			} else {
				var range = docObj.selection.createRange();
				var r2 = range.duplicate();			
				result.start = 0 - r2.moveStart('character', -100000);
				result.end = result.start + range.text.length;	
				result.caret = result.end;
			}			
		} else {
			result.start = node.selectionStart;
	    	result.end = node.selectionEnd;
			result.caret = result.end;
		}
		if (result.start < 0) {
			 result = {start:0, end:0, caret:0};
		}	
		
		return result.caret;

	};

	// Takes the content and surrounds every token with a span.
	this.getSpanSeparatedValue = function(text) {
		var join = '';
		var spacesplit = text.split(' ');

		for(var i = 0; i < spacesplit.length; i++) {
			var items = spacesplit[i].split('\n');
			for(var j = 0; j < items.length; j++) {
				join += '<span>' + items[j] + '\n' + ' </span>';
			}		
		}

		return join;
	};
	
	// Determine the x & y coordinates of the caret relative to the page.
	// TODO: refactor
	this.getTextSize = function(text, el) {
	
		for(var i = 0; i < document.styleSheets.length; i++) document.styleSheets[i].disabled = true;

		if(this.debugContainer) {
			document.body.removeChild(this.debugContainer);
			this.debugContainer = null;
		}

		var spannedValue = this.getSpanSeparatedValue(text);

		var div = document.createElement('div');
		div.innerHTML = spannedValue;		
		div.style.fontFamily = this.getStyle(el, 'font-family');
		div.style.fontSize = this.getStyle(el, 'font-size');
		div.style.paddingLeft = this.getStyle(el, 'padding-left');
		div.style.paddingRight = this.getStyle(el, 'padding-right');
		div.style.paddingTop = this.getStyle(el, 'padding-top');
		div.style.paddingBottom = this.getStyle(el, 'padding-bottom');
		div.style.display = 'block';
		div.style.position = 'absolute';
		div.style.border = '1px solid red';
		div.style.maxWidth = el.offsetWidth + 'px';
		document.body.appendChild(div);

		var spans = div.getElementsByTagName('span');

		var lastSpan = spans[spans.length - 1];
		var width = div.offsetWidth - lastSpan.offsetWidth;

		var dims = { width: lastSpan.offsetWidth + lastSpan.offsetLeft, height: div.offsetHeight };

		if(!this.config.debug) {
			document.body.removeChild(div);
			div = null;
		} else {
			this.debugContainer = div;
		}
		
		for(var i = 0; i < document.styleSheets.length; i++) {
			document.styleSheets[i].disabled = false;
		}

		return dims;
	};
	
	// Send out to the server for data, or if no url is specified return dummy data.
	this.getResults = function(token) {
		if(this.config.url) {
			var x = this.xhr();
			
			x.open('GET', this.url, false);
			x.send({token : token });
			
			return x.responseText;
		} else {		
			return this.config.localData;
		}
	};
	
	// Get the computer style of an element
	// http://www.robertnyman.com/2006/04/24/get-the-rendered-style-of-an-element/
	this.getStyle = function(oElm, strCssRule) {
		var strValue = "";
		if(document.defaultView && document.defaultView.getComputedStyle){
			strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
		}
		else if(oElm.currentStyle){
			strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
				return p1.toUpperCase();
			});
			strValue = oElm.currentStyle[strCssRule];
		}
		return strValue;
	};
	
	// Try and remove the results picker.
	this.remove = function() {
		if(this.showing) {
			document.body.removeChild(this.showing);
			this.showing = null;
		}
	};
	
	// Show the results picker.
	this.display = function(results, position, insertAt) {
		this.remove();
		var div = document.createElement('div');
		div.className = 'isense';
		var ul = document.createElement('ul');

		
		for(var i = 0; i < results.length; i++) {
			var li = document.createElement('li');

			var a = document.createElement('a');
			a.href='#';
			a.innerHTML = results[i];
			li.appendChild(a);
			
			a.onclick = function(ev) {
				ev = ev || window.event;
				var targ = ev.target || ev.srcElement;

				var v = this.config.textarea.value;
				var left = v.substring(0, insertAt + 1);
				var right = v.substring(insertAt + 1, v.length);

				this.config.textarea.value = left + targ.innerHTML + right;
				this.remove();
				this.config.textarea.focus();

				return false;
			}.bind(this);

			ul.appendChild(li);
		}

		div.style.left = position.x +'px';
		div.style.top = position.y +'px';
		div.style.position = 'absolute';
		
		div.appendChild(ul);
		this.showing = div;
		document.body.appendChild(div);
	};

	// Get an XMLHttpRequest object
	// http://snook.ca/archives/javascript/xmlhttprequest_activex_ie/
	this.xhr = function() {
		var transport;

		if(window.XMLHttpRequest) {
			transport = new XMLHttpRequest();
		}else{
			try{ transport = new ActiveXObject("MSXML2.XMLHTTP.6.0");  }catch(e){}
			try{ if(!transport) transport = new ActiveXObject("MSXML2.XMLHTTP");  }catch(e){}
		}
		return transport;
	};
};

// Limited example tokenizer.
Plastiscenic.defaultTokenizer = function() {

	// Implementations must provide this function.
	this.getToken = function(previousText) {
		return this.delimiter([' ', '\n\r', ';', '.'], previousText);
	};
	
	this.delimiter = function(delimiters, text) {
		for(var i = 0; i < delimiters.length; i++) {
			var delimiter = delimiters[i];
			if(text.indexOf(delimiter) > -1) {
			
				var split = text.split(delimiter);
				text = split[split.length - 1];
			}
		}
		return text;
	};
};