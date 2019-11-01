"use strict";

function countInversion(sequence) {
    let counter = 0;
    for (let i = 0; i < sequence.length; i++)
        for (let j = i; j < sequence.length; j++)
            if (sequence[i] > sequence[j]) {
                // [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
                counter++;
            }
    return counter;
}

console.log(countInversion([1, 2, 5, 3, 4, 7, 6]), 3);
console.log(countInversion([0, 1, 2, 3]), 0);
console.log(countInversion([99, -99]), 1);
console.log(countInversion([5, 3, 2, 1, 0]), 10);