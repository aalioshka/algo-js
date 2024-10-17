// neetcode: https://neetcode.io/problems/longest-increasing-subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    
    let max = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
                max = Math.max(dp[i], max);
            }
        }
    }
    // return Math.max(...dp);
    return max;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) // 4
console.log(lengthOfLIS([0,1,0,3,2,3])) // 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])) // 1
