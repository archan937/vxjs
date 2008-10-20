/*[name|Namespacing]*/

_.N = function(n) {
	var r = window, p = n.split('.');
	for(var i = 0; i < p.length && p[i]; i++) {
		if(!this.r[p[i]]) r[p[i]] = {};
		r = r[p[i]]
	} return r
}