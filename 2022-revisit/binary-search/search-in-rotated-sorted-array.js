// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/273622/Javascript-Simple-O(log-N)-Binary-Search-Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // When dividing the roated array into two halves, one must be sorted.
        if (nums[left] <= nums[mid]) { // Check if the left side is sorted
            if (nums[left] <= target && target <= nums[mid]) {
                // target is in the left
                right = mid - 1;
            } else {
                // target is in the right
                left = mid + 1;
            }
        } else {// Otherwise, the right side is sorted
            if (nums[mid] <= target && target <= nums[right]) {
                // target is in the right
                left = mid + 1;
            } else {
                // target is in the left
                right = mid - 1;
            }
        }
    }

    return -1;
};
