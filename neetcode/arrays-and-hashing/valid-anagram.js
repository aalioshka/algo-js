// neetcode: https://neetcode.io/problems/is-anagram
// Space: Time complexity: O(n + m)
// where n = s.length and m = t.length
// Space complexity: O(1) since we have at most 26 different characters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let sMap = {};
    let tMap = {};

    for(let i = 0; i < s.length; i++){
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        tMap[t[i]] = (tMap[t[i]] || 0) + 1;
    }

    const keys = Object.keys(sMap);

    for(let i = 0; i < keys.length; i++) {
        if(sMap[keys[i]] !== tMap[keys[i]]) {
            return false;
        }
    }

    return true;
};

const s = "anagram", t = "nagaram";
console.log(isAnagram(s,t)); // true