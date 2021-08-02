// based on the https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    let storage = {};
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i];
        if (storage[secondNum] !== undefined) {
            result = [storage[secondNum], i];
        } else {
            storage[nums[i]] = i;
        }
    }
    return result;
};
