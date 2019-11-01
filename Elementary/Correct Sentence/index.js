"use strict";

function correctSentence(text) {
    text = text[0].toUpperCase() + text.slice(1);
    if (text[text.length - 1] != '.') text += '.';
    return text;
}

console.log(correctSentence("greetings, friends"), '\n', "Greetings, friends.")
console.log(correctSentence("Greetings, friends."), '\n', "Greetings, friends.")
console.log(correctSentence("Greetings, friends."), '\n', "Greetings, friends.")
console.log(correctSentence("hi"), '\n', "Hi.")
console.log(correctSentence("welcome to New York"), '\n', "Welcome to New York.")