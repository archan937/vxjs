/*[name|Extend Object]*/
/*[desc|Object Merging]*/
/*[fn|T]*/

_.extend=_.T = function(o,a,y){
  for(y in a)o[y]=a[y];
  return o
}

/*[summary|Sometimes you need to extend an object with new attributes.]*/
/*[usage|
`_.T(original, new);`

  * original: the first JS object
  * new: the extendee whose attributes will be put in the new object
]*/
/*[example|
  {{{
    _.extend({
      "hello": "world",
      "internet": "LOLCAT"
    },
    {
      "name": "toni avonni",
      "job": "Cheese salesman"
    });
    //{"hello": "world", "internet": "LOLCAT", "name":"toni avonni","job": "cheese salesman"}
  }}}
]*/
