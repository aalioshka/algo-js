// N is the number of strings in the input array
// L is the length of the longest string
// Time: O(N * L log L)
// Space: O(N * L)

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