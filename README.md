<!doctype html>

<head>
	<meta charset="utf-8">
	<title>Chic v1.0 - JQuery Plugin</title>

	<link rel="stylesheet" href="jquery.chic.css">	
	
	<style type="text/css" media="screen">
	* { margin:0; padding:0; font-weight:200 }
	body { margin-left:5%; max-width: 820px; font-family:helvetica,sans-serif; color:#999 }
	h1 { font-size:700%; letter-spacing:-.05em }
	h1 span { font-size:12px; letter-spacing:-.02em }
	h2 { font-size:200% }
	header { margin-bottom:30px; color:#bbb }
	section { margin-bottom:30px }
	a { font-weight:bold; color:#777; margin:20px }
	select { width:200px }
	p { margin:20px 0 }
	p a { color:#999; margin:0 }
	ul { margin:10px 0 20px 20px; line-height:24px }
	code { font-size:18px; color:#777 }
	code span { font-weight:700; color:#777 }
	</style>

	<script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-27151233-2"]);_gaq.push(["_trackPageview"]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()</script>
</head>

<body>

<header>
	<hgroup>  
	  <h1>Chic v1.0 <span>Last updated 1.29.11</span></h1>
	  <h2>a basic cross-browser style / style hook for selects</h2>  
	</hgroup>
</header>

<section>
	<select title="Fabrics" class="chic">
      <option disabled selected>Fabrics</option>
	    <option>Denim</option>
	    <option>Wool</option>
	    <option>Chiffon</option>
	    <option>Velvet</option>
	    <option>Satin</option>
	    <option>Silk</option>
	    <option>Cotton</option>
	</select>

	<a href="https://github.com/jwdallas/Chic">Download on Github</a>
	<p>A simple JQuery plugin that dresses up select elements with class "chic" by dynamically wrapping them in an easily styleable &lt;div&gt; &lt;span&gt; combination.</p>
</section>	

<section>
	<h2>How Does it Work?</h2>
		<ul><li>It takes the HTML select element and makes it invisible (not hidden, just zero opacity).</li>
		<li>Then it places a span tag with the text of the title attribute for the select below it.</li>
		<li>Then it wraps the whole thing in an easily styleable div with class "chic-selector".</li></ul>
				
	<h3>Selects must have a title attribute and the .chic class</h3>	
	<code>
		<pre>    &lt;select <span>title="</span>Your Title Here<span>"</span> <span>class="chic"</span>&gt;&lt;/select&gt;
	</pre></code>
	
	<h3>Resulting DOM structure</h3>
	<code>
	<pre>    &lt;div class="chic-selector"&gt;
	   &lt;span&gt;Your Title Here&lt;/span&gt;
	   &lt;select title="Select Title" class="chic"&gt;&lt;/select&gt;
    &lt;/div&gt;</pre></code>
</section>

<section>
<h2>Compatible With</h2>
<ul><li>All Modern Browsers</li>
		<li>Internet Explorer 8</li>
		<li>Firefox 3.6</li></ul>
</section>		

<footer>
	<p>Created by <a href="http://jwdallas.com" target="_blank">Jonathan Dallas</a> with help from <a href="http://darkgoyle.com/">Francisco Brito</a>.
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
 <script>window.jQuery || document.write('<script src="jquery-1.7.1.min.js"><\/script>')</script>
<script src="jquery.chic.js"></script>

<script>$('.chic').chic();</script>

</body>