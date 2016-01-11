var Pangram = function(sentence) {
	this.sentence = sentence; //sentence has to be made a property upon variable initialization
};

Pangram.prototype.isPangram = function () {
	var cleanedSentence = this.sentence.toLowerCase();
	var alphabet = "zqxjkvbpygfwmucldrhsnioate";
	var pangramState = true; //true by default, for loop triggers false if any letters are missing

	for (i = 0; i < 26; i++) {
		if (cleanedSentence.indexOf(alphabet.charAt(i)) == -1) {
			pangramState = false;
		} else {}
	}

	return pangramState;
}

module.exports = Pangram;