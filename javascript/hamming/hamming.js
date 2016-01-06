'use strict;'


var Hamming = function() {};

Hamming.prototype.compute = function(seq1, seq2) {
	
	if(seq1.length != seq2.length) {
		throw("DNA strands must be of equal length.")
	}

	hammingcount = 0;
	i = 0;

	console.log(seq1);
	console.log(seq2);

	while (i < seq1.length) {
		if (seq1.charAt(i) == seq2.charAt(i)) {
			hammingcount += 0;
		} else {
			hammingcount += 1;
		}

		i += 1;
	}

	return hammingcount;
}

module.exports  = Hamming;
