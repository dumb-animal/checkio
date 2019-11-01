"use strict";

function digitsMultip(data) {
    let result = 1;
    while (data) {
        result *= data % 10 || 1;
        data = Math.trunc(data / 10);
    }
    return result;
}

console.log(digitsMultip(123405), 120);
console.log(digitsMultip(999), 729);
console.log(digitsMultip(1000), 1);
console.log(digitsMultip(1111), 1);