_.Ac=function(v,n,c,u,y){u=0;return y=setInterval(function(){c(u/v);u++>=v?clearInterval(y):0},n)}
_.A=function(h,p,s,e,r,x,f,i,b){return _.Ac(f,i,function(a){(a==1&&b)?b():0;h.style[p]=r+(s+(e-s)*a)+x})}