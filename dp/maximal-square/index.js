// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // see logic explanation step by step here: https://www.youtube.com/watch?v=_Lf1looyJMU
    if (!matrix.length) return 0;

    let dp = new Array(matrix.length ).fill(0).map(() => {
        return new Array(matrix[0].length).fill(0);
    });

    let max = 0;

    for (let r = 0; r < matrix.length; r++ ) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === '1' ) {
                let current = 1; // 1 stands for itself
                if( dp[r - 1] !== undefined && dp[r][c - 1] !== undefined) {
                    let up = dp[r - 1][c]; // up
                    let left = dp[r][c - 1]; // left
                    let diagLeft = dp[r - 1][c - 1]; // diagonal back
                    current += Math.min(left, up, diagLeft);
                }
                dp[r][c] = current;
                max = Math.max(current , max);
            }
        }
    }
    return max*max;
};
