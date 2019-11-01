"use strict";

function mostNumbers(...numbers) {
    if (!numbers.length) return 0;
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1] - numbers[0];
}

console.log(mostNumbers(1, 2, 3), 2, "3-1=2");
console.log(mostNumbers(5, -5), 10, "5-(-5)=10");
console.log(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5) * 1000), 12400, "10.2-(-2.2)=12.4");
console.log(mostNumbers(), 0, "Empty");
console.log(mostNumbers(36, -26, -7.5, 0.9, 0.53, -6.6, -71, 0.53, -48, 57, 69, 0.063, -4.7, 0.01, 9.2), 140, "69.0-(-71.0)")