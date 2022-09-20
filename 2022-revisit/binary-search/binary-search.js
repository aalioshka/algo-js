/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    while(nums[middleIndex] !== target && startIndex < endIndex) {
        if(target < nums[middleIndex]){
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    return nums[middleIndex] === target ? middleIndex : -1;
};