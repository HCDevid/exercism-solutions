'use strict'


function Hamming(x, y) {
	this.x = x;
	this.y = y;
}

Hamming.prototype.compute = function() {
	hammingcount = 0;
	i = 0;

	while (i < x.length) {
		if (x.charAt(i) == y.charAt(i)) {
			hammingcount += 1;
		} else {}

		i += 1;
	}

module.exports  = Hamming;

}