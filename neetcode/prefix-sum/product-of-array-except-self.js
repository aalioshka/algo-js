// neetcode: https://youtu.be/bNvIQI2wAjk
// Even better optimized solution (most common interview version)
// You can do it with O(1) extra space (excluding output array).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let output = new Array(n).fill(1);

    // prefix pass
    let prefix = 1;

    for (let i = 0; i < n; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }

    // postfix pass
    let postfix = 1;

    for (let i = n - 1; i >= 0; i--) {
        output[i] *= postfix;
        postfix *= nums[i];
    }

    return output;
};

var productExceptSelfMine = function(nums) {
    let n = nums.length;

    let prefix = new Array(n).fill(1);
    let postfix = new Array(n).fill(1);
    let output = new Array(n).fill(1);

    // build prefix
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // build postfix
    for (let i = n - 2; i >= 0; i--) {
        postfix[i] = postfix[i + 1] * nums[i + 1];
    }

    // build answer
    for (let i = 0; i < n; i++) {
        output[i] = prefix[i] * postfix[i];
    }

    return output;
};