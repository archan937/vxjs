/*[dep|index,hasclass]*/
/*[name|Add Class]*/
/*[desc|Add Class]*/
/*[fn|AC]*/

_.addclass=_.AC=function(e,c){
  if(_.HC(e))e.className+=' '+c
}

/*[summary|Add a class to an element (does not add if already present)]*/
/*[usage|
`_.AC(element, classname);`
  * classname: the class you want to add
  * element: the node add to
]*/
/*[example|
_.AC(document.body, 'purple')
]*/
