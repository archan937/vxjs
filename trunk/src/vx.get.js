/*[dep|short]*/
/*[name|Get Element]*/
/*[desc|Get Element By ID]*/
/*[fn|G]*/

_.id=_.G=function(e){
  return e.style?e:_.d.getElementById(e)
}

/*[summary|Most frameworks include shortcuts for common functions such as document.getElementById, famous ones include $ in Prototype and MooTools]*/
/*[usage|
`_.G(element id);`
  * id: the name of the element
  * Note: if id is an element, then it returns the element
]*/
/*[example|
_.G("hello").innerHTML = "happy"
]*/
