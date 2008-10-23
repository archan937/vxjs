/*[name|Stringify]*/
/*[desc|JSON Encoding]*/

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

/*[summary|The JSON encoder serializes complex objects into JSON strings suitable for AJAX queries and unserializes JSON strings into objects.]*/
/*[usage|
`_.S(data[,decode=false]);`
  * data: the object to be serialized or, in the case of decoding, the string to be unserialized
  * decode: true to unserialize the first argument, otherwise to serialize
]*/
/*[example|
{{{
// serialize an object
_.S({hello: "world!", recurse: {awesome: "true", undef: undefined, notfalse: true}})
//"{hello:'world!',recurse:{awesome:'true',undef:undefined,notfalse:true}}"

// unserialize a string
_.S("{hello:'world!',recurse:{awesome:'true',undef:undefined,notfalse:true}}",true)
//{hello:'world!',recurse:{awesome:'true',undef:undefined,notfalse:true}}
}}}
]*/
