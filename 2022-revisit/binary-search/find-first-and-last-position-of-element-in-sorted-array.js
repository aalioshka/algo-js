// Solution 1: Binary search + 2 pointers
// Complexity: O(NlogN), where N is a length of nums array.
//     Not optimal since we can have something like 888888888

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

// Solution 2: 2 Binary searches
// Complexity: O(logN), where N is a length of nums array.
//     Optimal for something like 888888888

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let middleIndex;

    // 1) find the startIndex - binary search
    while(startIndex <= endIndex) {
        middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (nums[middleIndex] >= target) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }

    if (nums[startIndex] !== target) {
        return [-1, -1];
    }

    const start = startIndex;

    // reset end
    endIndex = nums.length - 1;

    // 2) find the endIndex - binary search
    while(startIndex <= endIndex) {
        middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (nums[middleIndex] <= target) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }


    return [start, endIndex];
};