function new_autofill(textbox, fillbox, url){
  var list=[]
  var last_query = -1;
  function update_list(){
    var value = textbox.value;
    for(var i = 0; i < list.length; i++){
      if(list[i].indexOf(value) == 0 && list[i] != value){
        fillbox.style.display = "block"
        var li = _.d.createElement("li");
        li.className = "autofillitem"
	li.innerHTML = "<a href='javascript:void(0)'>"+list[i].replace(value, "<b>"+value+"</b>")+"</a>"
	li.textvalue = list[i]
	li.onmousedown = function(){
	  textbox.value = this.textvalue
	}
        fillbox.appendChild(li)
      }
    }
  }
  function update_box(){
    var pos = _.pos(textbox)
    fillbox.style.left = pos.l + "px"
    fillbox.style.top = pos.t + pos.h + "px"
    fillbox.style.width = pos.w + "px"
    fillbox.innerHTML = ""
    fillbox.style.display = "none"
  }
  function check_list(){
    if(textbox.value != ""){
      if(textbox.value.indexOf(last_query) == 0){
        update_list()
        last_query = textbox.value;
      }else{
        //setTimeout(function(){
        _.ajax(_.M(url, {string: textbox.value}), function(data){
          list = data.split(",")
          update_list()
          last_query = textbox.value;
        })
        //}, 500)
      }
    }
  }
  _.E(textbox, "blur", function(){
    setTimeout(function(){
      fillbox.innerHTML = ""
      fillbox.style.display = "none"
    },100)
  })
  _.E(textbox, "focus", function(){
    update_box()
    check_list()
  })
  _.E(textbox, "keyup", function(){
    update_box()
    check_list()
  })
}
