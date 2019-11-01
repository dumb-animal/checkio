
/* моё решение 
function longRepeat(line) {
    let letter = '';
    let count = 0;
    let tempCount = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] != letter) {
            letter = line[i];
            tempCount = 1;
        } else tempCount++;
        count = (tempCount > count) ? tempCount : count;
    }
    return count;
}
*/

function longRepeat(line) {
    return (!line) ? 0 : line
        .match(/(.)\1*/g)
        .sort((a, b) => b.length - a.length)[0].length
}

console.log(longRepeat(''), 0)
console.log(longRepeat('d'), 1)
console.log(longRepeat('dd'), 2)
console.log(longRepeat('sdsffffse'), 4)
console.log(longRepeat('ddvvrwwwrggg'), 3)