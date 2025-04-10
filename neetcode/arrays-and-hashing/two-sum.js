// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        let secondNumber = target - nums[i];
        
        if (map[secondNumber] !== undefined) {
            return [map[secondNumber], i]
        }
        
        map[nums[i]] = i;
    }
    
    return result;
};

const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target)); // [0,1]