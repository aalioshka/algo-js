/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    // 1) find the target - binary search
    while(nums[middleIndex] !== target && startIndex < endIndex) {
        if (target < nums[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    if (nums[middleIndex] !== target) {
        return [-1, -1];
    }

    // 2) find the firts/last positions, starting from found element index
    startIndex = middleIndex;
    endIndex = middleIndex;

    while(nums[startIndex - 1] === target) startIndex--;
    while(nums[endIndex + 1] === target) endIndex++;

    return [startIndex, endIndex];
};