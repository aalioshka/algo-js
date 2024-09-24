// neetcode:  https://youtu.be/fMSJSS7eO1w

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = 0;
    let r = matrix.length - 1;
    
    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            let top = l, bottom = r;

            // save the top left
            let topLeft = matrix[top][l + i];

            // move bottom left into top left
            matrix[top][l + i] = matrix[bottom - i][l];

            // move bottom right into bottom left
            matrix[bottom - i][l] = matrix[bottom][r - i];

            // move top right into bottom right
            matrix[bottom][r - i] = matrix[top + i][r];

            // move top left into top right
            matrix[top + i][r] = topLeft;
        }
        r--;
        l++;
    }
};

const input = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const output = 
[
    [7,4,1],
    [8,5,2],
    [9,6,3]
]

rotate(input);
console.log(input); // output