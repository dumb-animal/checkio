"use strict";

function commonWords(first, second) {
    first = first.split(',');
    second = second.split(',');
    return first.filter(val => second.indexOf(val) >= 0).sort().join();
}

console.log(commonWords("hello,world", "hello,earth"), " == hello");
console.log(commonWords("one,two,three", "four,five,six"), " == ");
console.log(commonWords("one,two,three", "four,five,one,two,six,three"), " == one,three,two");