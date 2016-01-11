'use strict;'

var BeerSong = function () {};

BeerSong.prototype.verse = function(n) {
	var l = n - 1;
	var bottlesVerse = '';
	
	if (n > 2) {
		bottlesVerse = n.toString() + ' bottles of beer on the wall, ' + n + ' bottles of beer.\nTake one down and pass it around, ' + l.toString() +
		' bottles of beer on the wall.\n';
	} else if (n == 2) {
		bottlesVerse = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
	} else if (n == 1) {
		bottlesVerse = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
	} else {
		bottlesVerse = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
	}


	return bottlesVerse;

}

BeerSong.prototype.sing = function(a, b) {
	if (b == undefined) {
		b = 0;
	}

	var output = '';

	for ( ; a > b; a--) {
		output = output + this.verse(a) + '\n';
	}

	output = output + this.verse(b);
	return output;
}

module.exports = BeerSong;