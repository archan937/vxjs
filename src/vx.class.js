/*[dep|index]*/
/*[name|Elements By Class Name]*/
/*[desc|Get Elements By Class Name]*/


_.L = function(n,d,y,k,z){
  y = (d?d:document).getElementsByTagName("*");
  z = [];
  for(k=y.length;k--;)_.I(n,y[k].className.split(" "))<0?0:z.push(y[k]);
  return z
}


/*[summary|]*/
/*[usage|
`_.L(classname[,node=document]);`
  * classname: the class you want to search for
  * node: the node to search in, by default, the document
]*/
/*[example|

]*/
