/*[dep|anim]*/
/*[name|Fade]*/
/*[desc|Simple Fade Animation]*/

_.F=function(d,h,f,i){
  d=d=='in';
  _.A(f?f:15,i?i:50,function(a){
    a=(d?0:1)+(d?1:-1)*a
    h.style.opacity=a;
    h.style.filter='alpha(opacity='+100*a+')';
  })
}


/*[summary|Fading is probably the most common and most useful effect. It makes sense most people don't like the complexity of the Core Animation function, and want a simpler function.]*/
/*[usage|
`_.F(DIRECTION IN/OUT, HTML ELEMENT[, FRAMES, INTERVAL]);`

  * Direction is lowercase, either "in" or "out"
  * Frames/interval are optional
  * Frames is number of frames in animation
  * Interval is the frame delay
]*/
/*[example|
{{{
_.F("out",document.body)
}}}
]*/
