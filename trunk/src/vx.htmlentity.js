/*[name|HTML Entity]*/
/*[desc|HTML Entity Encoding]*/

_.H=function(s,d) {
	var t = document.createElement('textarea');
	t.innerHTML = s;
	return d?t.value:t.innerHTML;
}

/*[summary|When dealing with HTML and XML, it is often necessary to convert troublesome characters into entities. The HTML entity encoder escapes and unescapes strings.]*/
/*[usage|
`_.H(str[,unesc=false]);`
  * str: the string to be escaped or unescaped
  * unesc: true to unescape the first argument, otherwise to escape
  * _the encoder does not escape ampersands in entities, i.e. &amp; to &amp;amp;_
]*/
/*[example|
{{{
// escape a string
_.H('ham & eggs')
//"ham &amp; eggs"

// unescape a string
_.H('ham &amp; eggs',true)
//"ham & eggs"
}}}
]*/
