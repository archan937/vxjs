/*[name|Extend Object]*/
/*[desc|Object Merging]*/
/*[fn|T]*/

_.extend=_.T = function(o,a,y){
  for(y in a)o[y]=a[y];
  return o
}

/*[summary|]*/
/*[usage|

]*/
/*[example|

]*/
