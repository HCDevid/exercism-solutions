var Pangram = function() {};

Pangram.prototype.isPangram = function (sentence) {
	sentence = sentence + ' ';

	var cleanedSentence = sentence.toLowerCase();
	var alphabet = "zqxjkvbpygfwmucldrhsnioate";

	for (i = 0; i < 26; i++) {
		if (cleanedSentence.indexOf(alphabet[i]) == -1) {
			return false;
		} else {return true}
	}
}

module.exports = Pangram;