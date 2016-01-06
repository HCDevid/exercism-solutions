'use strict;'

var dnaTranscriber = function () {};

dnaTranscriber.prototype.toRna = function(dna_seq) {
	var rna_seq = '';
	var i = 0;

		do {
			// Debug log from when using charAt instead of string concatenation
			console.log(i);
			console.log(rna_seq.charAt(i));
			console.log(converter(dna_seq.charAt(i)));

			// Actual execution loop
			rna_seq += converter(dna_seq.charAt(i));
			i += 1;
		} while (i < dna_seq.length);

	return rna_seq;

	function converter(dna) {
		switch(dna) {
			case 'C': return 'G';
			break;
			case 'G': return 'C';
			break;
			case 'A': return 'U';
			break;
			case 'T': return 'A';
			default: throw('unrecognized DNA');
		}
	}


}

module.exports = dnaTranscriber;