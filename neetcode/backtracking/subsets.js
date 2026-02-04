// neetcode: https://www.youtube.com/watch?v=REOH22Xwdkk

/*

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const subset = [];
    
    function dfs(i) {
        if(i >= nums.length){
            res.push([...subset]); // copy
            return;
        }

        // include nums[i]
        subset.push(nums[i]);
        dfs(i + 1);

        // exclude nums[i]
        subset.pop();
        dfs(i + 1);
    }

    dfs(0);

    return res;
};