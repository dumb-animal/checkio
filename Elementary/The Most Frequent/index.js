"use strict";

function mostFrequent(data) {
    data.sort();
    console.log(data);
    return '';
}

console.log(mostFrequent(['a', 'b', 'c', 'a', 'b', 'a']), 'a')
console.log(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')