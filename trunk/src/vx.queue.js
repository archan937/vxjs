/*[name|Queue]*/
/*[desc|Queue]*/


//var lt=["_.F('in',document.body,0,0,fn)","_.F('out',document.body,0,0,fn)"];

_.queue=_.U = function(l,n){ //l,f
  (n=function(){ //name function "f"
    eval(l.splice(0,1)[0]) //cut off first in array, eval it
  })(); //execute function
  return l
}


/*[summary|]*/
/*[usage|

]*/
/*[example|
_.U(["_.F('in',document.body,0,0,f)","_.F('out',document.body,0,0,f)"])
]*/
