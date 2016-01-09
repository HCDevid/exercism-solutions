//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

'use strict;'

var Bob = function() {};

Bob.prototype.hey = function(input) {

var inputType = '';
var lastCharacter = input.charAt(input.length - 1);

	if (input == input.toUpperCase() && input.length > 8) {
		inputType = 'yell';
	} else if (lastCharacter == '?') {
		inputType = 'question';
	} else if (input.replace(/ /g,'').length == 0) {
		inputType = 'nothing';
	} else {}

	switch(inputType) {
		case 'question': return 'Sure.';
		break;
		case 'yell': return 'Whoa, chill out!';
		break;
		case 'nothing': return 'Fine. Be that way!';
		break;
		default: return 'Whatever.';
	}
};

module.exports = Bob;
