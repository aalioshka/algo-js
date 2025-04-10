// Time: O(M * NlogN)
// Space: O(M * N)
// Where m is the number of strings and 
// N is the length of the longest string.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};


    strs.forEach(str => {
        let key = str.split('').sort().join('');
        if(!map[key]){
            map[key] = []
        }
        map[key].push(str);
    })

    return Object.values(map);
};

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs)); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]