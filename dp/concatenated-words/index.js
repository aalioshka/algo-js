/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    // longest word can be formed from the smallest words
    words.sort((a,b) => a.length - b.length);

    let wordDict = new Set();
    let concatenated = [];

    for (let i = 0; i < words.length; i++) {
        if(wordBreak(words[i], wordDict)) {
            concatenated.push(words[i]);
        }
        wordDict.add(words[i]);
    }
    return concatenated;
};

// same as here: https://leetcode.com/problems/word-break/discuss/1224046/JavaScript-Brute-Force-%2B-DP-Bottom-UP-solutions-with-comments-and-video
function wordBreak(s, wordDict) {
    // test case adge case: [""]
    if (s === '') return false;

    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && wordDict.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[dp.length - 1];
};
