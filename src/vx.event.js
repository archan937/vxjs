_.E=function(e,t,f,r){
  if(e.attachEvent){
    r?e.detachEvent('on'+t,e[t+f]):r;
    if(!r){
      e['e'+t+f]=f;
      e[t+f]=function(){e['e'+t+f](window.event)};
      e.attachEvent('on'+t,e[t+f]);
    }
  }else r?e.removeEventListener(t,f,false):e.addEventListener(t,f,false);
}
