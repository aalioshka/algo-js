// Brute Force Solution
// https://www.youtube.com/watch?v=uR3RElKnrkU
// s.startsWith(subStr) // === return s.substring(0, subStr.length) === subStr;

/*
Input: s = "pineapplepenapple",
wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
Explanation: Note that you are allowed to reuse a dictionary word.

cut the word and do recursion with the rest
Memo same calculations

pine -> all other substring
pine -> apple -> all other substring
pine -> apple -> pen -> all other substring
pine -> apple -> pen -> apple -> all other substring ("")

pine -> applepen -> all other substring
pine -> applepen -> apple -> all other substring ("")

pineapple -> all other substring
pineapple -> pen -> all other substring
pineapple -> pen -> apple -> all other substring ("")
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreakBF = function(s, wordDict) {
    return wordBreakHelper(s, wordDict, {});
};

function wordBreakHelper(s, wordDict, memo){
    if(memo[s]) {
        return memo[s];
    }

    let results = [];

    if(!s.length) {
        results.push('');
        return results;
    }

    for(let word of wordDict){
        if(s.startsWith(word)){
            // we have our word, now lets cut the rest
            // and do calculation on a smaller sub problem
            let rest = s.substring(word.length);
            let substrings = wordBreakHelper(rest, wordDict, memo);

            for(let subString of substrings){
                let spaceToAdd = subString === '' ? '' : ' ';
                results.push(word + spaceToAdd + subString);
            }
        }
    }

    memo[s] = results;
    return results;
}

/*
How Recursion stack will work:
call1 = apple + '' + '' // = 'apple'
call2 = pen + call1     // = 'pen apple'
call3 = apple + call2   // = 'apple pen apple'
etc.
...
 "pine apple pen apple"
 "pine applepen apple"
 "pineapple pen apple"
*/

// DP Solution
// Bottom UP
// Time: O(n^2)
// Space: O(n)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1);
    dp[0] = [''];

    for (let i = 1; i <= s.length; i++) {
        dp[i] = [];
        for (let j = i - 1; j >= 0; j--) {
            let word = s.substring(j, i);
            if (dp[j].length && wordDict.includes(word)) {
                for(let w of dp[j]){
                    let separator = w === '' ? '' : ' ';
                    dp[i].push(w + separator + word);
                }
            }
        }
    }

    return dp[dp.length - 1];
};
