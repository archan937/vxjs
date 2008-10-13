/*[name|HTML Entity]*/
/*[desc|encodes and decodes HTML entities]*/
_.H=function(s,d) {
	var t = document.createElement('textarea');
	t.innerHTML = s;
	return d?t.value:t.innerHTML;
}
