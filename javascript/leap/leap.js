// var isLeapYear = module.exports = function (year) {
//   return (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0));
// };

'use strict;'

function Year(year) { 
	this.year = year;
}

Year.prototype.isLeap = function() { 
	return ( this.year % 400 == 0 ) || (( this.year % 4 == 0 ) && ( this.year % 100 != 0 ));
}


module.exports = Year;

// var isLeap = module.exports = function(x) {
// 	if ((x % 400) == 0) {
// 		return true;
// 	} else if (x % 100 == 0) {
// 		return false;
// 	} else if (x % 4 == 0) {
// 			return true;
// 	} else {
// 		return false;
// 	}
// };

// function Year(x) {
// 	return isLeap(x);
// }

// function isLeap(x) {

// 	if ((x % 100) == 0) {
// 		return false;
// 	} else if (x % 4 != 0) {
// 		return false;
// 	} else {
// 		return true;
// 	}

// }
