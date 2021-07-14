// task: https://leetcode.com/problems/longest-increasing-subsequence

// example:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:
//
// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:
//
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// solution:

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(!nums.length) return 0;

    let dp = [];
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        dp.push(1);
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(dp[i], max);
            }
        }
    }
    return max;
};

// task: https://www.algoexpert.io/questions/Longest%20Increasing%20Subsequence

// example:
// input: array = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]
// output: [-24, 2, 3, 5, 6, 35]

// solution:
function longestIncreasingSubsequence(array) {
    if(!array.length || array.length === 1) return array;

    let dp = new Array(array.length).fill(1);
    let indexes = new Array(array.length).fill(-1);
    let maxLengthId = 0;
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        for (let j = 0; j < i; j++) {
            const previous = array[j];
            if (previous < current && dp[i] <= dp[j] + 1) {
                dp[i] = dp[j] + 1;
                indexes[i] = j;
            }
        }
        if(dp[maxLengthId] <= dp[i]) maxLengthId = i;
    }

    return buildSubsequence(array, indexes, maxLengthId);
}

function buildSubsequence(array, indexes, index){
    const results = [];

    while(index !== -1){
        results.unshift(array[index]);
        index = indexes[index]; // indexes store index for previous number
    }

    return results;
}
