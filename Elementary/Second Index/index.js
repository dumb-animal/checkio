"use strict";

function secondIndex(text, symbol) {
    let index = text.indexOf(symbol, text.indexOf(symbol) + 1);
    return index < 0 ? undefined : index;
}

console.log(secondIndex("sims", "s"), '\n', 3)
console.log(secondIndex("find the river", "e"), '\n', 12)
console.log(secondIndex("hi", " "), '\n', undefined)
console.log(secondIndex("hi mayor", " "), '\n', undefined)
console.log(secondIndex("hi mr Mayor", " "), '\n', 5)