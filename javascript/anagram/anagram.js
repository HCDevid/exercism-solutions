var Anagram = function (input) {
	var output = '';

	var anagram = function() {
		for (i = (input.length - 1); i >= 0; i--) {
			output = output + input.charAt(i);
		}

		console.log('anagram is ' + output);
		return output;
	}

	this.anagram = anagram();

	this.matches = function(inputArray) {
		var output = [];
		var anagramPosition = inputArray.indexOf(this.anagram);
		console.log('anagramPosition equals ' + anagramPosition);
		(anagramPosition != -1) ? output.push(inputArray[anagramPosition]) : output;

		console.log('the output of the matches function is ' + output);
		return output;
	}
};

module.exports = Anagram;