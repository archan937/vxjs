/*[name|Array Remove]*/
/*[desc|Remove items from arrays]*/
/*[fn|V]*/

_.remove=_.V= function(e,o,x){
  x=_.I(e,o);
  x>0?o.splice(x,1):0
}

/*[summary|Removes an the first occurance of an element from an array. NOTE: MODIFIES ORIGINAL]*/
/*[usage|
`_.V(element, array);`
  * element: anything with numberical iterators
  * array: anything with numberical iterators
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