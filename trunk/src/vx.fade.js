/*[dep|anim]*/
/*[name|Fade]*/
/*[desc|Simple Fade Animation]*/

_.F=function(d,h,f,i){
  d=d=='in'; //direction
  _.A(h,'opacity',d?0:1,d?1:0,'','',15,50); //all good browsers
  _.A(h,'filter',d?0:100,d?100:0,'alpha(opacity=',')',f?f:15,i?i:50) //ie
}

/*[summary|]*/
/*[usage|

]*/
/*[example|

]*/
