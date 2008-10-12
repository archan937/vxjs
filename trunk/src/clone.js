// depends on vS from stringify.js
// based on code from http://oranlooney.com/functional-javascript/
function vC(j,c) {
	// a copy is a duplicate of the original
	if(c) return eval('('+vS(j)+')');
	// a clone is an empty object with a prototype reference to the original
	function _() {}; // private constructor of this clone
	_.prototype = j;
    return new _()
}