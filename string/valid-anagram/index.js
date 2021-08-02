// https://leetcode.com/problems/valid-anagram/discuss/1379408/JavaScript

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const sCharMap = _buildCharMap(s);
    const tCharMap = _buildCharMap(t);

    if (Object.keys(sCharMap).length !== Object.keys(tCharMap).length) {
        return false;
    }

    for (let char in sCharMap) {
        if (sCharMap[char] !== tCharMap[char]) {
            return false;
        }
    }

    return true;
};

function _buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

var isAnagram2 = function(s, t) {
    return cleanString(s) === cleanString(t);
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}
