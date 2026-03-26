/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0;
    let n = mat.length

    for(let i = 0; i < n; i++){
        res += mat[i][i]; // primary diag
        res += mat[i][n - 1 - i]; // second diag
    }

    if(n % 2) {
        let mid = Math.floor(n / 2);
        res -= mat[mid][mid];
    }

    return res;
};