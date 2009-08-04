/*[name|Animation]*/
/*[desc|Basic Animation]*/
/*[fn|A]*/

_.fx=_.A=function(v,n,c,f,u,y){
  u = 0;
  (y=function(){
    c(u/v); //execute the callback
    u++<v? //check if reached max frames
    setTimeout(y,n): //if not then continue
    (f?f():0) //or else end and callback
  })() //run first loop
}

/*[summary|Here is a low level complicated yet flexible linear animation function. It is not recomended for normal use]*/
/*[usage|
`_.A(frames, interval, callback, finishcallback);`
  * frames: number of blocks to split animation into
  * interval: numer of milliseconds between frames
  * callback: function called at every frame with the argument a number between 0 and 1
  * finishcallback: a callback for when the animation is over
]*/
/*[example|
{{{
_.A(100, 100, function(p){
  _.G("progress").innerHTML = (p*100)+"%"
})
}}}
]*/
