function new_dropdown(menu, trigger, group)
{
  if(!menu && !trigger)
    return;
  var li = _.array(menu.getElementsByTagName('li'));
  if(!group) group = "default";  
  var timeout = null;

  if(!new_dropdown.global_list[group])new_dropdown.global_list[group]=[];
  var dropdown_array = new_dropdown.global_list[group]
  
  function dclose()
  {
    menu.style.zIndex = 42
    
    if((new Date).getTime()-dopen.lastaction < 500 || (new Date).getTime()-dclose.lastaction < 500){
      return autoclose();
    }
    dclose.lastaction = (new Date).getTime()
   
    
    _.slide(0,menu,function()
    {
      menu.style.height = '';
      menu.style.visibility = '';
    })
  }
  
  function autoclose()
  {
    if(timeout == null)
    {
      timeout = setTimeout(dclose,100);
    }
  }

  function close_other(){
    for(var i = 0; i < dropdown_array.length; i++)
    {
      if(dropdown_array[i][0] != menu)
      {
        dropdown_array[i][2]();
      }
    }
  }  

  dropdown_array.push([menu, trigger, function(){dclose()}]);
  
  function dopen()
  {
    dopen.lastaction = (new Date).getTime()
    close_other()
    setTimeout(close_other, 200)
    clearTimeout(timeout)
    timeout = null;
    if(menu.style.visibility != 'visible')
    {
      
      menu.style.zIndex = 9999989
      
      menu.style.visibility = 'visible';
      _.slide(1,menu,function()
      {
        menu.style.height = '';
        menu.style.visibility = 'visible';
      },5,20)
    }
  }
  
  for(var i = 0; i < li.length; i++)
  {
    _.on(li[i], "mouseover", dopen);
    _.on(li[i], "mouseout", autoclose);
  }
  _.on(trigger, "mouseover", dopen);
  _.on(trigger, "mouseout", autoclose);
  _.on(document, "click", function()
  {
    _.slide(0,menu,function()
    {
      menu.style.height = '';
      menu.style.visibility = ""
    })
  })
}

new_dropdown.global_list = {}
