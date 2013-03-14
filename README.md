<h1>Chic v1.1</h1>
A small 1.2kb jQuery plugin that dresses up select and checkbox elements by dynamically wrapping them in an easily styleable &lt;div&gt;'s and &lt;span&gt;'s allowing for a consistent look and feel across browsers.

<h2>How Does it Work?</h2>
<ul><li>Looks for selects and checkboxes with a <i>chic</i> class and then makes them invisible (not removed, just zero opacity). This way the actual elements still receive the click events.
<li>Grabs the title attribute on selects as the initial text for a dynamically inserted span.
<li>Inputs are dynamically wrapped in an easily styleable div with class "chic-selector" or "chic-checkbox" respective to input type.
=<li><strong>Caveat for checkboxes:</strong> you are unfortunately limited to the default checkbox width/height using this plugin if you want to keep cross browser support. However, if you're ok with using extra elements,
and you're only supporting modern browsers, you can style more thoroughly using <a href="http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons/">this technique</a>.</ul>

<h3>Compatible With</h3>
<ul><li>All Modern Browsers</li>
		<li>Internet Explorer 8</li>
		<li>Firefox 3.6</li></ul>		

Created by <a href="http://jwdallas.com" target="_blank">Jonathan Dallas</a> with help from <a href="http://darkgoyle.com/">Francisco Brito</a>.
