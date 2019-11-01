"use strict";

function simpleAreas(...args) {
	switch (args.length) {
		case 1:
			return (Math.PI / 4) * args[0] ** 2;
		case 2:
			return args[0] * args[1];
		case 3:
            //	Heron's Formula
			let p = (args[0] + args[1] + args[2]) / 2;
			return Math.sqrt(p * (p - args[0]) * (p - args[1]) * (p - args[2]));
		default:
			return undefined;
	}
}

console.log(simpleAreas(3), 7.07);
console.log(simpleAreas(2, 2), 4);
console.log(simpleAreas(2, 3), 6);
console.log(simpleAreas(3, 5, 4), 6);
console.log(simpleAreas(1.5, 2.5, 2), 1.5);
