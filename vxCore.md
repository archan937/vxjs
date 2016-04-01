# Introduction #
The vX core package provides a basic toolkit for Web scripting with an emphasis on size and speed. The whole of vX, including subordinate packages, resides within the `_` (underscore) namespace.
A file containing the full package is available at http://vxjs.googlecode.com/svn/trunk/lib/vx.all.js
The online build system at http://vxjs.googlecode.com/svn/trunk/build.htm can be used to generate subset packages.

# Overview #
The vX Javascript library is designed to be small. There are several ways to do most things. All functions have a long, human readable name and many have shortcuts that are a single uppercase letter. For example, _.ajax maps to_.X, while some are simpler to memorize than others. Everything is prefixed with the _symbol, similar to how many other libraries prefix things with $. Everything can be alternatively accessed through the vx object as well._

## Function List ##
  * [Add Class: Add Class](#Add_Class:_Add_Class.md)
  * [Ajax: AJAX Query](#Ajax:_AJAX_Query.md)
  * [Animation: Basic Animation](#Animation:_Basic_Animation.md)
  * [Array: Convert iterables to real arrays](#Array:_Convert_iterables_to_real_arrays.md)
  * [Bind: Bind a functiont to a scope](#Bind:_Bind_a_functiont_to_a_scope.md)
  * [Get By Class: Get By Class Name](#Get_By_Class:_Get_By_Class_Name.md)
  * [Clone: Object Copying and Cloning](#Clone:_Object_Copying_and_Cloning.md)
  * [Events: Event Handling](#Events:_Event_Handling.md)
  * [Extend Object: Object Merging](#Extend_Object:_Object_Merging.md)
  * [Fade: Simple Fade Animation](#Fade:_Simple_Fade_Animation.md)
  * [Get Element: Get Element By ID](#Get_Element:_Get_Element_By_ID.md)
  * [Has Class: Has Class](#Has_Class:_Has_Class.md)
  * [HTML Entity: HTML Entity Encoding](#HTML_Entity:_HTML_Entity_Encoding.md)
  * [Script Include: Dynamically load a script](#Script_Include:_Dynamically_load_a_script.md)
  * [Index: Array IndexOf](#Index:_Array_IndexOf.md)
  * [Namespacing: Namespace Generation](#Namespacing:_Namespace_Generation.md)
  * [Ninja: Ninja Mode](#Ninja:_Ninja_Mode.md)
  * [Position: Element Position](#Position:_Element_Position.md)
  * [Query Encode: Query Encoding](#Query_Encode:_Query_Encoding.md)
  * [Queue: Queue](#Queue:_Queue.md)
  * [Ready: Document onReady](#Ready:_Document_onReady.md)
  * [Array Remove: Remove items from arrays](#Array_Remove:_Remove_items_from_arrays.md)
  * [vX Shortcuts: Used mostly internally](#vX_Shortcuts:_Used_mostly_internally.md)
  * [Slide Animation: Slide Animation](#Slide_Animation:_Slide_Animation.md)
  * [Stringify: JSON Encoding](#Stringify:_JSON_Encoding.md)
  * [Templates: Templates](#Templates:_Templates.md)
  * [Trim String: Remove leading and ending whitespace](#Trim_String:_Remove_leading_and_ending_whitespace.md)
  * [Array Unique: Create a new unique array](#Array_Unique:_Create_a_new_unique_array.md)

## Add Class: Add Class ##
Add a class to an element (does not add if already present)
### Usage ###
`_.AC(element, classname);`
  * classname: the class you want to add
  * element: the node add to
### Example ###
```
_.AC(document.body, 'purple')
```

## Ajax: AJAX Query ##
AJAX is a staple of the "Web 2.0" world. vX provides an extremely lightweight module to perform simple asynchronous GET/POST requests.
### Usage ###
`_.X(url,callback[,query]);`
  * url: the URL to query
  * callback: function that is called when the query returns
  * query: query string, sets POST mode when specified
### Example ###
```
// perform a GET request
_.X("ajax.php?you=suck&howmuch=alot",function(response){alert(response);})

// perform a POST request
_.X("ajax.php",function(response){alert(response)},"you=suck&howmuch=alot")
```

## Animation: Basic Animation ##
Here is a low level complicated yet flexible linear animation function. It is not recomended for normal use
### Usage ###
`_.A(frames, interval, callback, finishcallback);`
  * frames: number of blocks to split animation into
  * interval: numer of milliseconds between frames
  * callback: function called at every frame with the argument a number between 0 and 1
  * finishcallback: a callback for when the animation is over
  * if callback return is 0, then animation is cancelled
### Example ###
```

_.A(100, 100, function(p){
  _.G("progress").innerHTML = (p*100)+"%"
})
```

## Array: Convert iterables to real arrays ##
Accepts an array-like collection and returns an array equivalent
### Usage ###
`_.Y(collection);`
  * collection: anything with numberical iterators
### Example ###
```
// a bunch of dom nodes
var original = document.body.childNodes
// create a clone and override a property
var array = _.Y(original)
// array functions like splice, etc. 
array.splice(1,1); //get rid of first object
```

## Bind: Bind a functiont to a scope ##
Bind a function to a scope, such as for event handlers
### Usage ###
`_.B(function, scope);`
  * function: a function to call when the return is called
  * scope: the scope to call the funciton from
  * returns: function
### Example ###
```
function VectorEditor(elem, width, height){
  this.draw.canvas.onmousedown = _.bind(function(event){
    this.onMouseDown(event.clientX - offset()[0], event.clientY - offset()[1], event.target)
  }, this);
}
```

## Get By Class: Get By Class Name ##

### Usage ###
`_.L(classname[,node=document]);`
  * classname: the class you want to search for
  * node: the node to search in, by default, the document
### Example ###


## Clone: Object Copying and Cloning ##
A _copy_ of an object is an _independent replica_ of the original. A _clone_ of an object is a "subclass" that _overrides_ the original. The difference between a copy and a clone is that when an object is modified, its copies are unaffected while its clones inherit the changes.
### Usage ###
`_.C(obj[,copy=false]);`
  * obj: the object to be cloned or copied
  * copy: true to copy the first argument, otherwise to clone
### Example ###
```
// set up the original object
var original = {a: 1, b: 2, c: 3}
// create a clone and override a property
var clone = _.C(original)
clone.b = 4
// create a copy and modify a property
var copy = _.C(original,true)
copy.b = 4

// modify the original object
original.b = 5
original.c = 6
original.d = 7
// copy is {a: 1, b: 4, c: 3}
// clone is {a: 1, b: 4, c: 6, d: 7}
```

## Events: Event Handling ##
Event handling is quite an important thing. It just is. If you want something to happen in response to something, then you need it.
### Usage ###
`_.E(element, event type, handler function, [,remove=false]);`
  * element: the element to attach or remove the handler from/to
  * type: the event to attach to, a string. Examples: "click", "keydown", "keyup", "mouseup", "mousedown"
  * handler: the function that will be triggered when event occurs
  * remove: set true to remove
### Example ###
```

_.E(document.body, "click", function(){
  alert('YOU CLICKED ME!')
});
```

## Extend Object: Object Merging ##
Sometimes you need to extend an object with new attributes.
### Usage ###
`_.T(original, new);`

  * original: the first JS object
  * new: the extendee whose attributes will be put in the new object
### Example ###
```
    _.extend({
      "hello": "world",
      "internet": "LOLCAT"
    },
    {
      "name": "toni avonni",
      "job": "Cheese salesman"
    });
    //{"hello": "world", "internet": "LOLCAT", "name":"toni avonni","job": "cheese salesman"}
```

## Fade: Simple Fade Animation ##
Fading is probably the most common and most useful effect. It makes sense most people don't like the complexity of the Core Animation function, and want a simpler function.
### Usage ###
`_.F(DIRECTION IN/OUT, HTML ELEMENT[, END CALLBACK, FRAMES, INTERVAL]);`

  * Direction is lowercase, either "in" or "out"
  * Frames/interval are optional
  * Frames is number of frames in animation
  * Interval is the frame delay
  * end callback is functino executed at end
  * note: anything not 'in' is treated as 'out'
### Example ###
```
_.F("out",document.body)
```

## Get Element: Get Element By ID ##
Most frameworks include shortcuts for common functions such as document.getElementById, famous ones include $ in Prototype and MooTools
### Usage ###
`_.G(element id);`
  * id: the name of the element
  * Note: if id is an element, then it returns the element
### Example ###
```
_.G("hello").innerHTML = "happy"
```

## Has Class: Has Class ##
detecting whether a CSS class is present in an element
### Usage ###
`_.HC(element, classname);`
  * classname: the class you want to search for
  * element: the node check for
### Example ###
```
if(_.HC(document.body, 'purple')){
alert('YAY PURPLE')
}
```

## HTML Entity: HTML Entity Encoding ##
When dealing with HTML and XML, it is often necessary to convert troublesome characters into entities. The HTML entity encoder escapes and unescapes strings.
### Usage ###
`_.H(str[,unesc=false]);`
  * str: the string to be escaped or unescaped
  * unesc: true to unescape the first argument, otherwise to escape
  * _the encoder does not escape ampersands in entities, i.e. &amp; to &amp;amp;_
### Example ###
```
// escape a string
_.H('ham & eggs')
//"ham &amp; eggs"

// unescape a string
_.H('ham &amp; eggs',true)
//"ham & eggs"
```

## Script Include: Dynamically load a script ##
Dynamic loading scripts are an Ajax design pattern.
### Usage ###
`_.N('vx.index.js');`
  * location: the location of the js file to load from
  * Note: it can be across a different domain.
### Example ###
```
_.N('vx.index.js');
```

## Index: Array IndexOf ##

### Usage ###
`_.I(obj, array);`
  * obj: object to search for
  * array: the array to search in
  * Note that it only gets the first occurance and ignores the following
### Example ###
```
_.I("ham", ["bacon", "trees", "cows", "nuclear-pests"]);
//-1
var breakfast = ["bacon", "ham", "eggs", "javascript"]
_.I("ham", breakfast);
//1
```

## Namespacing: Namespace Generation ##
Generate long namespaces (objects) chained together somehow.
### Usage ###
`_.N(namespace string);`
  * namespace: a string with names split by periods
### Example ###
```
_.N('com.vxjs.beta.application.longname.library.core') = 42;
com.vx.beta.applciation.longname.library.core
//42
```

## Ninja: Ninja Mode ##
Similar to jQuery's noConflict()
### Usage ###
`_.ninja(extreme);`
  * extreme: remove both _and vx from global namespace
  * warning: may break certain components!
### Example ###
```
(function(_){
  //vX stuffs
})(vx.ninja())
```_

## Position: Element Position ##
Sometimes it's important to get the location and size of an element.
### Usage ###
`_.P(element);`
  * element: the HTML element to get
  * returns object with l, t, w and h.
### Example ###
```
var pos = _.pos(_.G("el"));
alert("Width: "+pos.w);
alert("Height:"+pos.h);
alert("Top:"+pos.t);
alert("Left:"+pos.l);
```

## Query Encode: Query Encoding ##
The query encoder builds an HTTP query string out of a Javascript object; this simple serialization scheme prepares data for sending to the server.
### Usage ###
`_.Q(obj);`
  * obj: object to be encoded
  * _query-encoding is not recursive and does not escape data_
### Example ###
```
_.Q({you: "suck", howmuch: "alot"})
//"you=suck&howmuch=alot"
```

## Queue: Queue ##

### Usage ###
`_.U(eval function array);`
  * array: an array of functions like in the example with an argument (a function) that is called when finished
### Example ###
```
_.U(["_.F('in',document.body,0,0,f)","_.F('out',document.body,0,0,f)"])
```

## Ready: Document onReady ##
Many people use Window.onLoad to execute their scripts after the page has loaded. But, there is only 1 window.onload function you can set, and it happens after the images and etc are loaded. Document onReady allows you to execute javascript immediately when the document is ready for manipulation, before images are loaded and you can use it with multiple functions.
### Usage ###
`_.R(function);`
  * function: A javascript function to execute after the DOM is ready for manipulation
### Example ###
```
_.R(function(){
  alert("this will execute before the page is fully loaded, but after DOM can be manipulated");
  //manipulate DOM
})
```

## Array Remove: Remove items from arrays ##
Removes an the first occurance of an element from an array. NOTE: MODIFIES ORIGINAL
### Usage ###
`_.V(element, array);`
  * element: anything with numberical iterators
  * array: anything with numberical iterators
### Example ###
```
// a bunch of dom nodes
var original = document.body.childNodes
// create a clone and override a property
var array = _.Y(original)
// array functions like splice, etc. 
array.splice(1,1); //get rid of first object
```

## vX Shortcuts: Used mostly internally ##
lets vX be smaller
### Usage ###
`_.d`
  * no arguments. a link to document
### Example ###
```
document = _.d
```

## Slide Animation: Slide Animation ##
It's one of those awesome animations.
### Usage ###
`_.slide(direction,element[, finishcallback, frames, interval]);`
  * direction: to expand or to contract
  * element: the element to animate
  * finishcallback: function to call when done
  * frames: number of frames in animation
  * interval: milliseconds between frames
### Example ###
```
_.slide(1,menu,function() //slide in
{
  menu.style.height = ''; //reset height
  menu.style.visibility = 'visible'; //yay for light
},5,20)


_.slide(0,menu,function() //slide out
{
  menu.style.height = ''; //hi
  menu.style.visibility = "hidden" //scary!
})
```

## Stringify: JSON Encoding ##
The JSON encoder serializes complex objects into JSON strings suitable for AJAX queries and unserializes JSON strings into objects.
### Usage ###
`_.S(data[,decode=false]);`
  * data: the object to be serialized or, in the case of decoding, the string to be unserialized
  * decode: true to unserialize the first argument, otherwise to serialize
### Example ###
```
// serialize an object
_.S({hello: "world!", recurse: {awesome: "true", undef: undefined, notfalse: true}})
//"{hello:'world!',recurse:{awesome:'true',undef:undefined,notfalse:true}}"

// unserialize a string
_.S("{hello:'world!',recurse:{awesome:'true',undef:undefined,notfalse:true}}",true)
//{hello:'world!',recurse:{awesome:'true',undef:undefined,notfalse:true}}
```

## Templates: Templates ##
Simple string templating
### Usage ###
`_.M(string, vars);`
  * string: the string template
  * vars: an object with the variables to replace
### Example ###
```
var template = "hello {name}! I {verb} you! No, not really, I actually {verb2} you.";
var variables = {
  name: "Bob",
  verb: "love",
  verb2: "want to kill"
}

_.M(template, variables);
//hello Bob! I love you! No, not really, I actually want to kill you.
```

## Trim String: Remove leading and ending whitespace ##
Remove leading and ending whitespace
### Usage ###
`_.TM(string);`
  * string: a block of text
### Example ###
```
_.trim("   i am a blob of     text       ")
//i am a blob of     text
```

## Array Unique: Create a new unique array ##
Create a new array with only unique items from an array with repeating items
### Usage ###
`_.unique(array);`
  * array: an array with stuff
### Example ###
```
_.unique([1,3,3,7])
//[1,3,7]
```