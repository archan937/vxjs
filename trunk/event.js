function vE(e,t,f){if(e.attachEvent){e['e'+t+f]=f;e[t+f]=function(){e['e'+t+f](window.event)};e.attachEvent('on'+t,e[t+f])}else{e.addEventListener(t,f,false)}}

function vEr(e,t,f){if(e.detachEvent){e.detachEvent('on'+t,e[t+f]);e[t+f]=null;}else{e.removeEventListener(t,f,false)}}
