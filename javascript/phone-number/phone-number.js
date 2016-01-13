'use strict;'

var PhoneNumber = function (inputNumber) {
	var numberArray = inputNumber.match(/[0-9]/g);
	var cleanedNumber = numberArray.join('');

	if (cleanedNumber.length == 11 && cleanedNumber.charAt(0) == 1) {
		cleanedNumber = cleanedNumber.substr(1);
	} else if (cleanedNumber.length != 10) {
		cleanedNumber = '0000000000';
	} else {};

	this.number = function() {
		return cleanedNumber;
	}

	this.areaCode = function() {
		return cleanedNumber.substr(0,3);
	}

	this.centralCode = cleanedNumber.substr(3,3);
	this.remainderCode = cleanedNumber.substr(6);
	this.result = '(' + this.areaCode() + ') ' + this.centralCode + '-' + this.remainderCode;
	console.log(this.result);
}

PhoneNumber.prototype.toString = function() {
	return this.result;
}

module.exports = PhoneNumber;
