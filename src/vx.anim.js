/*[name|Animation]*/
/*[desc|Basic Animation]*/
/*[fn|A]*/

function(v,n,c,u,y){
  u = 0;
  return y = setInterval(function(){
    c(u/v);
    //if(u++ >= v) clearInterval(y)
    ++u>v?clearInterval(y):0
  },n);
}


/*[summary|]*/
/*[usage|

]*/
/*[example|

]*/
