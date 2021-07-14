
// Brute Force solution
// Time Limit Exceeded
// with:
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
// ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreakTLE = function(s, wordDict) {
    return wordBreakHelper(s, wordDict, {}, false);
};

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true

// apple + rest
// apple + pen + rest
// apple + pen + apple + rest ''

function wordBreakHelper(s, wordDict, memo, foundFlag){
    if(memo[s]) return memo[s];

    if (foundFlag) {
        return true;
    }

    if (s === '') {
        return true;
    }

    for(let i = 0; i < wordDict.length; i++){
        if(foundFlag) break;
        if(s.startsWith(wordDict[i])){
            const restOfString = s.substring(wordDict[i].length);
            foundFlag = wordBreakHelper(restOfString, wordDict, memo, foundFlag);
            memo[restOfString] = foundFlag;
        }
    }

    return foundFlag;
}

// https://www.youtube.com/watch?v=1U4jQusbeJc
// Bottom UP
// Time: O(n^2)
// Space: O(n)

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[dp.length - 1];
};

// s = 'abcdef'
// dict = ['ab', 'cd', 'ef']
//
// '' a b c d e f
// T  F T F T F T
// 0  1 2 3 4 5 6
