/*[name|Array]*/
/*[desc|Convert iterables to real arrays]*/
/*[fn|Y]*/

_.array=_.Y = function(a,b){
  for(b=a.length,c=[];b--;)c.push(a[b]);
  return c
}

/*[summary|Accepts an array-like collection and returns an array equivalent]*/
/*[usage|
`_.Y(collection);`
  * collection: anything with numberical iterators
]*/
/*[example|
{{{
// a bunch of dom nodes
var original = document.body.childNodes
// create a clone and override a property
var array = _.Y(original)
// array functions like splice, etc. 
array.splice(1,1); //get rid of first object
}}}
]*/
/*[ref|from http://www.prototypejs.org/api/utility/dollar-a]*/
