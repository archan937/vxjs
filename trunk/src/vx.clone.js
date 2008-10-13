// depends on vS from stringify.js
// based on code from http://oranlooney.com/functional-javascript/
_.C=function(j,c) {
	// a copy is a duplicate of the original
	if(c) return eval('('+_.S(j)+')');
	// a clone is an empty object with a prototype reference to the original
	function p() {}; // private constructor of this clone
	p.prototype = j;
    return new p()
}
