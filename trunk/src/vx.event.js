/*[name|Events]*/
_.E=function(e,t,f,r){
  if(e.attachEvent){
    e['e'+t+f]=f;
    e[t+f]=function(){e['e'+t+f](window.event)};
    r?e.detachEvent('on'+t,e[t+f]):e.attachEvent('on'+t,e[t+f]);
  }else r?e.removeEventListener(t,f,!1):e.addEventListener(t,f,!1);
}


/*[name|Events]*/
_.E=function(e,t,f,r){
  if(e.attachEvent && r?e.detachEvent('on'+t,e[t+f]):!0){
    e['e'+t+f]=f;
    e[t+f]=function(){e['e'+t+f](window.event)};
    e.attachEvent('on'+t,e[t+f]);
  }else r?e.removeEventListener(t,f,!1):e.addEventListener(t,f,!1);
}


/*[name|Events]*/

_.E=function(e,t,f,r){
  if(e.attachEvent){
    e['e'+t+f]=f;
    e[t+f]=function(){e['e'+t+f](window.event)};
    r?e.detachEvent('on'+t,e[t+f]):e.attachEvent('on'+t,e[t+f]);
  }else r?e.removeEventListener(t,f,!1):e.addEventListener(t,f,!1);
}


/*[name|Events]*/

_.E=function(e,t,f,r){
  if(e.attachEvent){
    r?0:e['e'+t+f]=f;
    r?0:e[t+f]=function(){e['e'+t+f](window.event)};
    r?e.detachEvent('on'+t,e[t+f]):e.attachEvent('on'+t,e[t+f]);
  }else r?e.removeEventListener(t,f,!1):e.addEventListener(t,f,!1);
}

/*[name|Events]*/
_.E=function(e,t,f,r){
  if(e.attachEvent){
    //r?e.detachEvent('on'+t,e[t+f]):!0; //if no r then return true
    if(r?e.detachEvent('on'+t,e[t+f]):!0){ //should return true and fire if no r, detach if r
      e['e'+t+f]=f;
      e[t+f]=function(){e['e'+t+f](window.event)};
      e.attachEvent('on'+t,e[t+f]);
    }
  }else r?e.removeEventListener(t,f,!1):e.addEventListener(t,f,!1);
         r?(e.removeEventListener:e.addEventListener)(t,f,!1);
}


_.E=function(e,t,f,r){
  if(e.attachEvent){
    if(r?e.detachEvent('on'+t,e[t+f]):!0){
      e['e'+t+f]=f;
      e[t+f]=function(){e['e'+t+f](window.event)};
      e.attachEvent('on'+t,e[t+f]);
    }
  }else r?e.removeEventListener(t,f,!1):e.addEventListener(t,f,!1);
}



(r?e.removeEventListener:e.addEventListener)(t,f,!1);