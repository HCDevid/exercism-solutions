'use strict;'

var Gigasecond = function (date) {
	this.initialDate = date;
}

Gigasecond.prototype.date = function() {
	var msBump = Math.pow(10,9)*1000;
	var initialMs = Date.parse(this.initialDate);
	var finalMs = initialMs + msBump;

	return new Date(finalMs);

}


module.exports = Gigasecond;