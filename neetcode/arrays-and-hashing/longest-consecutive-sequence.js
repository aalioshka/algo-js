// netcode: https://youtu.be/P6RZZMu_maU
// Time: O(N)
// Space: O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let numSet = new Set(nums); // Insert all numbers into a Set
    let longest = 0;

    for (let num of numSet) {
        // Only start counting if num - 1 is not in the set (indicating it's the start of a sequence)
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLong = 1;

            // Keep counting consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLong++;
            }

            longest = Math.max(longest, currentLong); // Update longest
        }
    }

    return longest;
};

console.log(longestConsecutive([100,4,200,1,3,2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([1,0,1,2])); // 3