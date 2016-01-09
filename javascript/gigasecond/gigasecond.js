'use strict;'

var Gigasecond = function (date) {
	var msBump = Math.pow(10,9)*1000;

	var initialMs = Date.parse(date);
	var finalMs = initialMs + msBump;

	this.milliseconds = finalMs;
}

Gigasecond.prototype.date = function() {
	return Date.setTime(this.milliseconds)
}


module.exports = Gigasecond;