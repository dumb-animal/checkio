"use strict";

function nonUniqueElements(data) {
    return data.filter((elem => data.indexOf(elem) !== data.lastIndexOf(elem)));
}

console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10, 9]