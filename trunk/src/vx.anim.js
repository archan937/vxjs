_('').Ac=function(v,n,c){
  var u = 0,
  y = setInterval(function(){
    c(u/v);
    if(u++ >= v) clearInterval(y)
  },n);
  return y
}

_('').A=function(h,p,s,e,r,x,f,i,b){
  return vAc(f, i, function(a){
    (a==1 && b)?b():0;
    h.style[p]=r+(s+(e-s)*a)+x
  });
}
