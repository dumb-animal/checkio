const VALUES = {
    'e': 1,
    'a': 1,
    'i': 1,
    'o': 1,
    'n': 1,
    'r': 1,
    't': 1,
    'l': 1,
    's': 1,
    'u': 1,
    'd': 2,
    'g': 2,
    'b': 3,
    'c': 3,
    'm': 3,
    'p': 3,
    'f': 4,
    'h': 4,
    'v': 4,
    'w': 4,
    'y': 4,
    'k': 5,
    'j': 8,
    'x': 8,
    'q': 10,
    'z': 10
};

function worthOfWords(words) {
    let result = '';
    let count = 0;
    for (let word of words) {
        let temp = 0;
        for (let i = 0; i < word.length; i++) temp += VALUES[word[i]];
        if (temp > count) {
            count = temp;
            result = word;
        }
    }
    return result;
}

console.log(worthOfWords(['hi', 'quiz', 'bomb', 'president']), 'quiz')
console.log(worthOfWords(['zero', 'one', 'two', 'three', 'four', 'five']), 'zero')