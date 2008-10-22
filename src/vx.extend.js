/*[name|Extend Object]*/

_.T = function(o,a,y){
  for(y in a)o[y]=a[y];
  return o
}