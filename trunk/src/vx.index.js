/*[dep|index]*/
/*[name|Array IndexOf]*/
/*[desc|]*/

_.I = function(/*Value*/v,/*Array*/a  /*[USELESS VAR*/,i){
  for(i = a.length; i-- && a[i] != v;);
  return i;
}

/*[summary|]*/
/*[usage|

]*/
/*[example|

]*/
/*[ref|based on http://snippets.dzone.com/posts/show/2437]*/
