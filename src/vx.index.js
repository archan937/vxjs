/*[dep|index]*/
/*[name|Array IndexOf]*/
/*[ref|based on http://snippets.dzone.com/posts/show/2437]*/

_.I = function(/*Value*/v,/*Array*/a  /*[USELESS VAR*/,i){
  for(i = a.length; i-- && a[i] != v;);
  return i;
}