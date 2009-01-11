/*[name|Stringify]*/
/*[desc|JSON Encoding]*/
/*[fn|S]*/

_.json=_.S=function(j,d,t) {
	if(d) return eval('('+j+')');	
	if(!j) return j+'';
	t = [];
	if(j.pop) {
		for(x in j) t.push(_.S(j[x]));
		j = '['+t.join(',')+']'
	}else if(typeof j=='object') {
		for(x in j) t.push(x+':'+_.S(j[x]));
		j = '{'+t.join(',')+'}'
	}else if(j.split) j = "'"+j.replace(/\'/g,"\\'")+"'";
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
