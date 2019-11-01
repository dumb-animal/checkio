
/*  моё первое решение 

function mostWanted(data) {
    let result = '';
    let resCount = 0;
    data = data.toLowerCase().replace(/[^A-Za-z]/g, '');
    data = data.split('').sort().join('');
    for (let i = 0; i < data.length; i++) {
        let letter = data[i];
        let counter = 0;
        for (let j = i; j < data.length; j++)
            if (data[j] === letter) counter++;
        if (counter > resCount) {
            result = letter;
            resCount = counter;
        }
    }
    return result;
}
*/

function mostWanted(data) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let wanted = {char: '', count : 0};
    for (let char of chars) {
        var count = data.toLowerCase().split(char).length;
        if (count > wanted.count) {
            wanted.char = char;
            wanted.count = count;            
        }
    }        
    return wanted.char;  
}



console.log(mostWanted("Hello World!"), "l");
console.log(mostWanted("How do you do?"), "o");
console.log(mostWanted("One"), "e");
console.log(mostWanted("Oops!"), "o");
console.log(mostWanted("AAaooo!!!!"), "a");