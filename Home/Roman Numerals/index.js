function romanNumerals(number) {
    let result = ''
    let arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0; i < arab.length;) {
        let temp = number - arab[i];
        if (temp >= 0) {
            result += roman[i];
            number -= arab[i];
        } else i++;
    }
    return result;
}

console.log(romanNumerals(6), 'VI');
console.log(romanNumerals(76), 'LXXVI');
console.log(romanNumerals(499), 'CDXCIX');
console.log(romanNumerals(3888), 'MMMDCCCLXXXVIII');
