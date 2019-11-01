function hammingDistance(n, m) {
    return (n ^ m).toString(2).replace(/0/g,'').length;
}

console.log(hammingDistance(117, 17), 3);
console.log(hammingDistance(1, 2), 2);
console.log(hammingDistance(16, 15), 5);
