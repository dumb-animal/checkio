function middle(text) {
    let index = Math.ceil(text.length/2)-1;
    if (text.length % 2 == 1) return text[index];
    else return text.slice(index, index+2);
}

console.log(middle(''), '')
console.log(middle('example'), 'm')
console.log(middle('test'), 'es')
console.log(middle('very-very long sentence'), 'o')
console.log(middle('I'), 'I')
console.log(middle('no'), 'no')