// https://www.youtube.com/watch?v=nIVW4P8b1VA

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let res = nums[0];
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        // in the rotated array one half is always sorted
        // we check, we are in the sorted half or not
        if(nums[l] < nums[r]) {
            res = Math.min(res, nums[l]);
            break;
        }

        let middle = Math.floor((l + r) / 2);
        res = Math.min(res, nums[middle]);

        if(nums[middle] >= nums[l]){
            l = middle + 1;
        } else {
            r = middle - 1;
        }
    }

    return res;
};