var Words = function() {};

Words.prototype.count = function (input) {
	var cleanedInput = input.replace(/\s+/g,' ').trim();
	//cleaning includes leading/trailing spaces, multiple spaces, tabs, and line breaks

	var wordArray = cleanedInput.split(' ');
	var counts = Object.create(null); //Empties prototype definitions to fix last test

	for (var i = 0; i < wordArray.length; i++) {
		var word = wordArray[i];
		counts[word] = counts[word] ? counts[word]+1 : 1;
	}

	return counts;

}

module.exports = Words;