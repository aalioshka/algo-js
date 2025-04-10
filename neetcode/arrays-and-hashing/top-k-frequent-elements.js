// Sorting
// Time complexity:  O(N Log N)
// Space complexity: O(N)
// Where N is nums.length
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent2 = function(nums, k) {
    const count = {};
    const results = [];

    // Step 1: Count frequencies - O(N)
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    // Step 2: Sort keys by frequency - O(N log N)
    let sortedKeys = Object.keys(count).sort((a,b)=>count[b]-count[a]);

    // Step 3: Take top k elements
    for(let i = 0; i < k; i++){
        results.push(Number(sortedKeys[i]));
    }

    return results;
};

// Neetcode: https://youtu.be/YPTqKIgVk-k
// Bucket Sort
// Time: O(N) (counting + linear scan of frequency buckets)
// Space: O(N) for the map and frequency array
// Where N is nums.length
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};
    const freq = Array(nums.length + 1).fill().map(() => []);

    // Step 1: Count frequencies - O(N)
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    // Step 2: Bucket the numbers by frequency
    for (let [num, cnt] of Object.entries(count)) {
        freq[cnt].push(Number(num));
    }

    /// Step 3: Collect top k frequent elements
    const res = [];
    for (let i = freq.length - 1; i >= 1; i--) {
        for (let num of freq[i]) {
            res.push(num);
            if (res.length === k) {
                return res;
            }
        }
    }
};

const nums = [1,1,1,2,2,3], k = 2;
console.log(topKFrequent(nums,k)); // [1,2]
console.log(topKFrequent2(nums,k)); // [1,2]