-------------------------------------
FormHints RELEASE NOTES
v0.9 - Colin Ramsay
http://colinramsay.co.uk/formhints/
------------------------------------

Note
----

The FormHints script is licensed under the MIT license which means you can do whatever you want with it so long as you keep the license intact. I'd appreciate a mention where ever you use it as well :> This is version 0.9 as I have not done any extensive testing as yet.

Usage
-----

Include formhints.js and formhints.css in your <head>:

<head>
	<link rel="stylesheet" type="text/css" href="formhints.css" />
	<script type="text/javascript" src="formhints.js"></script>
</head>

Now, there is a two-step process to setting up a formhint. Firstly, add a class of "hasHint" to the form element you which to give a hint to:

<label>
	First Name: <input name="firstname" class="hasHint" />
</label>

Secondly, add a div anywhere on your page with an id of hint-FORMELEMENTNAME, where FORMELEMENTNAME is the value of the name attribute of the form element from the previous step:

<label>
	First Name: <input name="firstname" class="hasHint" />
	<div id="hint-firstname">
		<p>hello test!!</p>
		<img src="http://www.google.co.uk/intl/en_uk/images/logo.gif" />
	</div>
</label>

The inner content of this div will be included in your form hint.

Limitations
-----------

Form elements can only have the class name hasHint. This version does not support multiple class names on the form elements.

Changelog
---------

0.9		Initial release