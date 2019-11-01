"use strict";

/* первая версия
function fizzBuzz(data) {
    let result = '';
    if (data % 3 == 0) result += "Fizz";
    if (data % 5 == 0) result += " Buzz"
    return (result.trim()) || `${data}`;
}
*/

function fizzBuzz(data) {
    if (data % 3 == 0 && data % 5 == 0) return "Fizz Buzz"
    if (data % 3 == 0) return "Fizz";
    if (data % 5 == 0) return "Buzz";
    return `${data}`;
}

console.log(fizzBuzz(15), '\n', "Fizz Buzz");
console.log(fizzBuzz(6), '\n', "Fizz");
console.log(fizzBuzz(5), '\n', "Buzz");
console.log(fizzBuzz(7), '\n', "7");