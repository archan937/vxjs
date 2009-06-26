/*[name|Events]*/
/*[desc|Event Handling]*/
/*[fn|E]*/

_.on=_.E=function(e, //Element
              t, //Type (Event)
              f, //Function (Callback)
              r  //Remove? (default false)
              ){ //start function
  if( //start if thing
    e.attachEvent? //if attach event
    ( //if attach event
      r? //if remove
      e.detachEvent('on'+t,e[t+f]): //remove
      1 //tell to run add event
    ): //else (no attach event)
    ( //if no attachEvent
    r? //remove?
      e.removeEventListener(t,f,0): //if yes, then remove (standards)
      e.addEventListener(t,f,0) //if no, then add (standards)
    ) //end if no attachEvent
   //end if
  ){ //start add event (IE)
      e['e'+t+f]=f;
      e[t+f]=function(){e['e'+t+f](window.event)};
      e.attachEvent('on'+t,e[t+f])
  } //end add event (IE)
} //end function
//end vxEvents

/*[summary|Event handling is quite an important thing. It just is. If you want something to happen in response to something, then you need it.]*/
/*[usage|
`_.E(element, event type, handler function, [,remove=false]);`
  * element: the element to attach or remove the handler from/to
  * type: the event to attach to, a string. Examples: "click", "keydown", "keyup", "mouseup", "mousedown"
  * handler: the function that will be triggered when event occurs
  * remove: set true to remove
]*/
/*[example|
{{{
_.E(document.body, "click", function(){
  alert('YOU CLICKED ME!')
});
}}}
]*/
