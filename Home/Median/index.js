function median(data) {
    data = data.sort((a, b) => a - b);
    let i = Math.round(data.length / 2 - 1);
    if (data.length % 2 == 0) return (data[i] + data[i + 1]) / 2;
    else return data[i];
}

console.log(median([1, 2, 3, 4, 5])); // 3
console.log(median([3, 1, 2, 5, 3])); // 3
console.log(median([1, 300, 2, 200, 1])); // 2
console.log(median([3, 6, 20, 99, 10, 15])); // 12.5