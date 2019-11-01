function weakPoint(matrix) {
    let row = [];
    let col = matrix[0];
    for (let i = 0; i < matrix.length; i++) {
        row.push(matrix[i].reduce((a, b) => a += b));
        if (i == 0) continue;
        matrix[i].forEach((el, j) => col[j] += el);
    }
    const min = (a, b) => a = (a < b) ? a : b;
    col = col.indexOf(col.reduce(min));
    row = row.indexOf(row.reduce(min));
    return [row, col];
}

console.log(weakPoint([
    [7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
]), [3, 3]);

console.log(weakPoint([
    [7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
]), [1, 2]);

console.log(weakPoint([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]), [0, 0]);