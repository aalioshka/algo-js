// Neetcode explanation: https://neetcode.io/problems/longest-repeating-substring-with-replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const freqCount = {};
    let left = 0;
    let max = 0;
    let mostFreq = 0;
    
    for (let right = 0; right < s.length; right++) {
        freqCount[s[right]] = (freqCount[s[right]] || 0)+ 1;
        
        // update most Freq each time
        mostFreq = Math.max(mostFreq, freqCount[s[right]]);
        
        while((right - left + 1) - mostFreq > k) {
            freqCount[s[left]] -= 1;
            left++;
        }
        
        max = Math.max(max, right - left + 1);
    }
    
    return max;  
};

console.log(characterReplacement("ABAB",2)); // 4
console.log(characterReplacement("AABABBA",1)); // 4