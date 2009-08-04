/*[name|Slide Animation]*/
/*[desc|Slide Animation]*/
/*[fn|slide]*/
/*[dep|anim]*/

_.slide = function(d,e,o,f,i,q){
  q = e.clientHeight;
  _.A(f?f:15,i?i:10,function(a){
    a=(d?0:1)+(d?1:-1)*a;
    e.style.height = (a*q)+'px';
  },o)
}

/*[summary|The query encoder builds an HTTP query string out of a Javascript object; this simple serialization scheme prepares data for sending to the server.]*/
/*[usage|
`_.slide(direction,element[, finishcallback, frames, interval]);`
  * direction: to expand or to contract
  * element: the element to animate
  * finishcallback: function to call when done
  * frames: number of frames in animation
  * interval: milliseconds between frames
]*/

