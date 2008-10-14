/*[dep|stringify]*/
/*[name|Clone]*/
/*[desc|copies or clones an object]*/
/*[note|a copy is a duplicate of the original; a clone overrides the original]*/
/*[ref|from http://oranlooney.com/functional-javascript/]*/
_.C=function(j,c) {
	// a copy is a duplicate of the original
	if(c) return _.S(_.S(j),!0); //!0 = true
	// a clone is an empty object with a prototype reference to the original
	function p() {}; // private constructor of this clone
	p.prototype = j;
    return new p()
}
