$ = function(e){
  if(e.split){ //string
    var q = e.substr(1),
        j = e.substr(0,1),
        i,
        r = 
        j=="#"?[_.G(q)]: //get element from ID
        ( //if not from ID
        j=="."?_.L(q): //if by class name
        document.getElementsByTagName(e) //if get by tag name
        );
      return $._dxt(r);
  }else if(e.style){
    return $._dxt([e]);
  }else if(e.length){
    return $._dxt(e);
  }else{
    _.R(e); //onReady
    return $;
  }
}

$.each = function(o,c){
  var i = 0;
  if(o.length == undefined){
    for(var n in o)
      if(c.call(o[n],n,o[n]) === false)
        break;
  }else{
    for (var v = o[0];i < o.length && c.call(v,i,v) !== false; v = o[++i]);
  }
}

$._dxt = function(r){
  _.T(r, { //extend array
    fade: function(dir){
      $.each(r, function(){
        if(!this._queue)
          this._queue = [];
        this._queue.push("_.F('"+dir+"',document.body,0,0,f)")
        //if(this._queue.length <= 1)
          //_.U(this._queue)
      })
      return r;
    },
    fadeOut: function(){
      return $(r).fade("out")
    },
    fadeIn: function(){
      return $(r).fade("in")
    }
  })
  return r;
}

$.load = function(u,d,c){
  _.X(u+"?"+_.Q(d),c);
}

