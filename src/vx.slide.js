/*[name|Slide Animation]*/
/*[desc|Slide Animation]*/
/*[fn|slide]*/

_.slide = function(d,e,o,q){
q = e.clientHeight;
_.A(15,10,function(a){
a=(d?0:1)+(d?1:-1)*a;
e.style.height = (a*q)+'px';
},o)
}

/*[summary|The query encoder builds an HTTP query string out of a Javascript object; this simple serialization scheme prepares data for sending to the server.]*/
/*[usage|
`_.slide(direction,element);`
  * direction: to expand or to contract
  * element: the element to animate
]*/

