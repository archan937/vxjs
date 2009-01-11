/*[dep|index]*/
/*[name|Get By Class]*/
/*[desc|Get By Class Name]*/
/*[fn|L]*/

_.class=_.L = function(n,d,y,k,h){
  y = (d?d:document).getElementsByTagName("*");
  h = [];
  for(k=y.length;k--;)_.I(n,y[k].className.split(" "))<0?0:h.push(y[k]);
  return h
}


/*[summary|]*/
/*[usage|
`_.L(classname[,node=document]);`
  * classname: the class you want to search for
  * node: the node to search in, by default, the document
]*/
/*[example|

]*/
