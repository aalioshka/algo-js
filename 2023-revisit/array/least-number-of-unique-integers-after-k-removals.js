// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map = {};

    // build map
    arr.forEach(el => {
        map[el] = map[el] ? map[el] + 1 : 1;
    });

    // get counts in sorted order, started from smallest
    let counts = Object.values(map).sort((a,b) => a-b);
    let result = counts.length;

    for (let i = 0; i < counts.length; i++) {
        if (k >= counts[i]) {
            k -= counts[i];
            result--;
        } else {
            return result;
        }
    }

    return result;

    // Time Complexity: O(nlog(n)) - using sorting. Can be optimized to O(log(n)) is use Min heap
    // Space Complexity: O(n)
};

console.log(findLeastNumOfUniqueInts([5,5,4], 1)); // Output: 1
// Explanation: Remove the single 4, only 5 is left.

console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3)); // Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.