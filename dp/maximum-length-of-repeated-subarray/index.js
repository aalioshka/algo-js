// https://leetcode.com/problems/maximum-length-of-repeated-subarray

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    // https://www.youtube.com/watch?v=BysNXJHzCEs
    if(!A.length || !B.length) return 0;

    let max = 0;
    let dp = new Array(A.length).fill(0).map(() => {
        return new Array(B.length).fill(0);
    });

    for (let r = 0; r < dp.length; r++ ) {
        for (let c = 0; c < dp.length; c++) {
            if(A[r] === B[c]){
                if(dp[r - 1] !== undefined && dp[r - 1][c - 1] !== undefined){
                    dp[r][c] = dp[r - 1][c - 1]  + 1; // previous diagonal + 1 for itself
                } else {
                    dp[r][c] = 1; // 1 stands for itself
                }
                max = Math.max(dp[r][c], max);
            }
        }
    }

    return max;
};
