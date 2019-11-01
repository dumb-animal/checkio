"use strict";

function findMessage(data) {
    return data.replace(/[^A-Z]/g, '');
}

console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), '\n', "HELLO");
console.log(findMessage("hello world!"), '\n', "");
console.log(findMessage("HELLO WORLD!!!"), '\n', "HELLOWORLD");