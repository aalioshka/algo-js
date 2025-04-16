// https://neetcode.io/problems/trapping-rain-water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // Two pointers
    // time O(n)
    // space O(1)

    if (!height || !height.length) return 0;

    let l = 0;
    let r = height.length - 1;

    let leftMax = height[l];
    let rightMax = height[r];

    let res = 0;

    while (l < r) {
        if (leftMax < rightMax) {
            l += 1;
            leftMax = Math.max(leftMax, height[l]);
            res += leftMax - height[l];
        } else {
            r -= 1;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }

    }

    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9