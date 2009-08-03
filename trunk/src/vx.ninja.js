/*[name|Ninja]*/
/*[desc|Ninja Mode]*/

_.ninja = function(){
  delete _;
  return vx
}


/*[summary|Similar to jQuery's noConflict()]*/
/*[usage|
`_.ninja(extreme);`
  * extreme: remove both _ and vx from global namespace
  * warning: may break certain components!
]*/
/*[example|
{{{
(function(_){
  //vX stuffs
})(vx.ninja())
}}}
]*/
