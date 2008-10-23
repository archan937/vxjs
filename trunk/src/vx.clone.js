/*[dep|stringify]*/
/*[name|Clone]*/
/*[desc|Object Copying and Cloning]*/

_.C=function(j,c) {
	// a copy is a duplicate of the original
	if(c) return _.S(_.S(j),!0); //!0 = true
	// a clone is an empty object with a prototype reference to the original
	function p() {}; // private constructor of this clone
	p.prototype = j;
    return new p()
}

/*[summary|A _copy_ of an object is an _independent replica_ of the original. A _clone_ of an object is a "subclass" that _overrides_ the original. The difference between a copy and a clone is that when an object is modified, its copies are unaffected while its clones inherit the changes.]*/
/*[usage|
`_.C(obj[,copy=false]);`
  * obj: the object to be cloned or copied
  * copy: true to copy the first argument, otherwise to clone
]*/
/*[example|
{{{
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
}}}
]*/
/*[note|a copy is a duplicate of the original; a clone overrides the original]*/
/*[ref|from http://oranlooney.com/functional-javascript/]*/
