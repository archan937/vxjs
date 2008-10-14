/*[name|Stringify]*/
/*[desc|encodes and decodes JSON]*/

_.S=function(j,d) {
	if(d) return eval('('+j+')');
	if(!j) return j+'';
	var f = arguments.callee, c = j.constructor+'', t = [];
	if(c.match(/array/i)) {
		for(x in j) t.push(f(j[x]));
		return '['+t.join(',')+']'
	} if(c.match(/object/i)) {
		for(x in j) t.push(x+':'+f(j[x]));
		return '{'+t.join(',')+'}'
	} if(c.match(/string/i)) return "'"+j.replace(/\'/g,"\\'")+"'";
	return j
}
