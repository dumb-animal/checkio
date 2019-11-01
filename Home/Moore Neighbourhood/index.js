"use strict";

function countNeighbours(data, row, col) {
    let result = 0;
    let area = 1; // to change the area of visibility
    for (let i = 0; i < data.length; i++)
        for (let j = 0; j < data[i].length; j++)
            if (Math.abs(row - i) <= area && Math.abs(col - j) <= area)
                result += data[i][j];
    return result -= data[row][col];
}


console.log(countNeighbours([
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
], 1, 2), 3);

console.log(countNeighbours([
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
], 0, 0), 1);

console.log(countNeighbours([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
], 0, 2), 3);

console.log(countNeighbours([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
], 1, 1), 0);
console.log(countNeighbours([
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0]
], 5, 4), 2);