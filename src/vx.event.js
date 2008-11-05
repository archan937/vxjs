/*[name|Events]*/
/*[desc|Event Handling]*/
/*[fn|E]*/

_.E=function(e, //Element
              t, //Type (Event)
              f, //Function (Callback)
              r  //Remove? (default false)
              ){ //start function
  if( //start if thing
    e.attachEvent? //if attach event
    ( //if attach event
      r? //if remove
      e.detachEvent('on'+t,e[t+f]): //remove
      !0 //tell to run add event
    ): //else (no attach event)
    ( //if no attachEvent
    r? //remove?
      e.removeEventListener(t,f,!1): //if yes, then remove (standards)
      e.addEventListener(t,f,!1) //if no, then add (standards)
    ) //end if no attachEvent
   //end if
  ){ //start add event (IE)
      e['e'+t+f]=f;
      e[t+f]=function(){e['e'+t+f](window.event)};
      e.attachEvent('on'+t,e[t+f])
  } //end add event (IE)
} //end function
//end vxEvents

/*[summary|]*/
/*[usage|

]*/
/*[example|

]*/
