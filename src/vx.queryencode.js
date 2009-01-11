/*[name|Query Encode]*/
/*[desc|Query Encoding]*/
/*[fn|Q]*/

_.query=_.Q=function(j,y,x){
  y='';
  for(x in j)y+='&'+x+'='+encodeURIComponent(j[x]);
  return y.substr(1)
}

/*[summary|The query encoder builds an HTTP query string out of a Javascript object; this simple serialization scheme prepares data for sending to the server.]*/
/*[usage|
`_.Q(obj);`
  * obj: object to be encoded
  * _query-encoding is not recursive and does not escape data_
]*/
/*[example|
{{{
_.Q({you: "suck", howmuch: "alot"})
//"you=suck&howmuch=alot"
}}}
]*/
