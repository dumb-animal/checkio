"use strict";

function evenLast(data) {
	if (data.length)
		return (
			data.reduce((sum, el, i) => (sum += i % 2 == 0 ? el : 0)) *
			data[data.length - 1]
		);
	return 0;
}

console.log(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
console.log(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
console.log(evenLast([6]), 36, "(6)*6=36");
console.log(evenLast([]), 0, "An empty array = 0");
