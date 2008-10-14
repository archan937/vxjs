/*[name|Ajax]*/

_.X=function(u,f,p,x){
  x=(window.ActiveXObject)?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();
  x.open(p?"POST":"GET",u,true);
  p?x.setRequestHeader("Content-type","application/x-www-form-urlencoded"):p;
  x.onreadystatechange=function(){
    //if(x.readyState==4&&x.status==200) f?f(x.responseText,x):f
    x.readyState==4?(f?f(x.responseText,x):0):0
  };
  x.send(p)
}
