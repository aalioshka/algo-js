/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // O(log M + Log N), where M is number of rows, AND N is number of columns
    
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    let top = 0;
    let bottom = rows - 1;
    
    let row;
    
    // 1. Binary Search for rows
    
    while (top <= bottom) {
        row = Math.floor((top + bottom) / 2);
        
        if (target > matrix[row][cols - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bottom = row -1;
        } else {
            break; // the target is in this row
        }
    }
    
    if (top > bottom) {
        // there is no target in the matrix
        return false;
    }
    
    // 2. Binary Search in single row array
    
    let l = 0;
    let r = cols - 1;
    
    while(l <= r) {
        let middle = Math.floor((l + r) / 2);
        if(target > matrix[row][middle]){
            l = middle + 1;
        } else if (target < matrix[row][middle]) {
            r = middle - 1;
        } else {
            return true; // target === matrix[row][middle]
        }
    }
    
    // there is no target in the matrix
    return false;
};

const matrix1 = 
[
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
];

console.log(searchMatrix(matrix1, 3)); // true;
console.log(searchMatrix(matrix1, 34)); // true;
console.log(searchMatrix(matrix1, 17)); // false;