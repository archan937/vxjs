/*[name|Ajax]*/

_.X=function(u,f,p,x){
  x=(window.ActiveXObject)?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();
  x.open(p?'POST':'GET',u,true);
  p?x.setRequestHeader('Content-type','application/x-www-form-urlencoded'):p;
  x.onreadystatechange=function(){
    x.readyState==4?f?f(x.responseText,x):f:0
  };
  x.send(p)
}
