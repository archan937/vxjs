/*[dep|anim]*/
/*[name|Fade]*/
/*[desc|Simple Fade Animation]*/

_.F=function(d,h,f,i,c){
  d=d=='in'; //direction
  _.A(h,'opacity',d?0:1,d?1:0,'','',15,50,c); //all good browsers
  _.A(h,'filter',d?0:100,d?100:0,'alpha(opacity=',')',f?f:15,i?i:50,c) //ie
}

/*[summary|Fading is probably the most common and most useful effect. It makes sense most people don't like the complexity of the Core Animation function, and want a simpler function.]*/
/*[usage|
vF(DIRECTION IN/OUT, HTML ELEMENT[, FRAMES, INTERVAL]);

  * Direction is lowercase, either "in" or "out"
  * Frames/interval are optional
  * Frames is number of frames in animation
  * Interval is the frame delay
]*/
/*[example|
{{{
vF("out",document.body)
}}}
]*/
