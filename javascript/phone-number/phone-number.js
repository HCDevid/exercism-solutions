'use strict;'

var PhoneNumber = function (inputNumber) {
	var numberArray = inputNumber.match(/[0-9]/g);
	console.log(numberArray);

	var cleanedNumber = numberArray.join('');
	console.log(cleanedNumber);

	// this.number = cleanedNumber;
	number : function() {
		return cleanedNumber;
	}

	this.areaCode = cleanedNumber.substr(0,3);
	this.centralCode = cleanedNumber.substr(3,3);
	this.remainderCode = cleanedNumber.substr(6);

	var result = '(' + this.areaCode + ') ' + this.centralCode + '-' + this.remainderCode;
	return result;
}

module.exports = PhoneNumber;
