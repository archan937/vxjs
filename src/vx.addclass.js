/*[dep|index]*/
/*[name|Has Class]*/
/*[desc|Has Class]*/
/*[fn|HC]*/
_.hasclass=_.HC=function(e,c){
  return _.I(c,e.className.split(" "))>0
}

/*[summary|]*/
/*[usage|
`_.HC(element, classname);`
  * classname: the class you want to search for
  * element: the node check for
]*/
/*[example|

]*/
