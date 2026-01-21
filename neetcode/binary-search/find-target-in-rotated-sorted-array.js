// neetcode https://www.youtube.com/watch?v=U8XENwh8Oy8

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        
        if(nums[l] <= nums[mid]) { // left sorted portion
            if (target > nums[mid] || target < nums[l]) {
                // target is in the right
                l = mid + 1;
            } else {
                // target is in the left
                r = mid - 1;
            }
            
        } else { // right sorted portion
            if (target < nums[mid] || target > nums[r]) {
                 // target is in the left
                r = mid - 1;
            } else {
                // target is in the right
                l = mid + 1;
            }
        }
    }

    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0)) // 4
console.log(search([4,5,6,7,0,1,2], 3)) // -1