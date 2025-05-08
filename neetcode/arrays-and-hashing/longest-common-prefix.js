/*
N: the number of strings
M: he maximum length of a string in strs

Time Complexity
Sorting: O(N Log N)
Prefix comparison: O(M)
Total: O(N Log N * M)

Space Complexity:
O(1) as most of the build in Sortings doesn't use any extra space
and we only use first/last/i so it is also only O(1)
Total: O(1)

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    
    strs.sort(); // Sort lexicographically

    let first = strs[0];
    let last = strs[strs.length - 1];

    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i); // slice first i positions
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs)); // "fl"

strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs)); // ""