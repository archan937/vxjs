/*[name|Stringify]*/
/*[desc|encodes and decodes JSON]*/

_.S=function(j,d) {
	if(d) return eval('('+j+')');
	if(!j) return j+'';
	var c = j.constructor+'', t = [];
	if(c.match(/arr/i)) {
		for(x in j) t.push(_.S(j[x]));
		return '['+t.join(',')+']'
	} if(c.match(/obj/i)) {
		for(x in j) t.push(x+':'+_.S(j[x]));
		return '{'+t.join(',')+'}'
	} if(c.match(/str/i)) return "'"+j.replace(/\'/g,"\\'")+"'";
	return j
}
