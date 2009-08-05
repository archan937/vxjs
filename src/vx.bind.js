/*[name|Bind]*/
/*[desc|Bind a functiont to a scope]*/
/*[fn|B]*/
/*[dep|array]*/

_.bind = _.B = function(f,s){
  return function(){return f.apply(s, _.Y(arguments))}
}

/*[summary|Bind a function to a scope, such as for event handlers]*/
/*[usage|
`_.B(function, scope);`
  * function: a function to call when the return is called
  * scope: the scope to call the funciton from
  * returns: function
]*/
/*[example|
{{{
function VectorEditor(elem, width, height){
  this.draw.canvas.onmousedown = _.bind(function(event){
    this.onMouseDown(event.clientX - offset()[0], event.clientY - offset()[1], event.target)
  }, this);
}
}}}
]*/
