/*[name|Array Unique]*/
/*[desc|Create a new unique array]*/
/*[fn|unique]*/

_.unique=function(a){
  for(var b=a.length,c=[];b--;) //loop elements
  _.I(a[b],c)>0? //if not in list
    0:c.push(a[b]); //add it
  return c
}

/*[summary|Create a new unique array]*/
/*[usage|
`_.unique(array);`
  * array: an array with stuff
]*/
/*[example|
{{{
_.unique([1,3,3,7])
//[1,3,7]
}}}
]*/
