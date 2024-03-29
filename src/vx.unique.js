/*[name|Array Unique]*/
/*[desc|Create a new unique array]*/
/*[fn|unique]*/

_.unique=function(a,b){
  for(b=a.length,c=[];b--;)_.I(a[b],c)>0? //loop if not in list
    0:c.push(a[b]); //add it
  return c //return
}

/*[summary|Create a new array with only unique items from an array with repeating items]*/
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
