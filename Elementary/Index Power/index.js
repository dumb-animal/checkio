"use strict";

function indexPower(array, n) {
    return (n >= array.length) ? -1 : array[n] ** n;
}

console.log(indexPower([1, 2, 3, 4], 2), 9);
console.log(indexPower([1, 3, 10, 100], 3), 1000000);
console.log(indexPower([0, 1], 0), 1);
console.log(indexPower([1, 2], 3), -1);
console.log(indexPower([96,92,94],3),-1);