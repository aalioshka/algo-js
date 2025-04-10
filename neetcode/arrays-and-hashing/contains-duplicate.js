// https://neetcode.io/problems/duplicate-integer
// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};

    for(let i = 0; i < nums.length; i++){
        if (map[nums[i]]) {
            return true;
        } else {
            map[nums[i]] = 1;
        }
    }

    return false;
};

const nums = [1,2,3,1];
console.log(containsDuplicate(nums)); // true