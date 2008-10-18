/*[dep|index]*/
/*[name|Array IndexOf]*/
/*[ref|based on http://snippets.dzone.com/posts/show/2437]*/

_.I = function(v,a){
  for(var i = a.length; i-- && a[i] != v;);
  return i;
}