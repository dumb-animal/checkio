"use strict";

function toEncrypt(text, delta) {
	const A_INDEX = 97;
	const LETTERS = 26;
	const SPACE = 32;
	let result = "";

	for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        
		if (code === SPACE) {
			result += String.fromCharCode(code);
			continue;
		}

		code += delta;
		if (code > A_INDEX + LETTERS) code -= LETTERS;
		if (code < A_INDEX) code += LETTERS;
		result += String.fromCharCode(code);
	}
	return result;
}

console.log(toEncrypt("a b c", 3), "d e f");
console.log(toEncrypt("a b c", -3), "x y z");
console.log(toEncrypt("simple text", 16), "iycfbu junj");
console.log(toEncrypt("important text", 10), "swzybdkxd dohd");
console.log(toEncrypt("state secret", -13), "fgngr frperg");
