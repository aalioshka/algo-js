// neetcode: https://youtu.be/jzZsG8n2R9A
// Time O(N^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates
        }

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const threeSum = nums[i] + (nums[l] + nums[r]);
            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++; // Skip duplicates for the second number
                }
            }
        }
    }

    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // []
console.log(threeSum([0,0,0])); // [0,0,0]