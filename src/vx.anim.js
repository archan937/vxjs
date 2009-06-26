/*[name|Animation]*/
/*[desc|Basic Animation]*/
/*[fn|A]*/

_.fx=_.A=function(v,n,c,u,y){
  u = 0;
  return y = setInterval(function(){
    c(u/v);
    //if(u++ >= v) clearInterval(y)
    ++u>v?clearInterval(y):0
  },n);
}


/*[summary|Here is a low level complicated yet flexible linear animation function. It is not reccomended]*/
/*[usage|
`_.A(frames, interval, callback);`
  * frames: number of blocks to split animation into
  * interval: numer of milliseconds between frames
  * callback: function called at every frame with the argument a number between 0 and 1
]*/
/*[example|
_.A(100, 100, function(p){
  _.G("progress").innerHTML = (p*100)+"%"
})
]*/
