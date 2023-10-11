// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome3 = function(s) {
    let cleared = s.replace(/[^a-zA-Z0-9]/g , '').toLowerCase();
    return cleared === cleared.split('').reverse().join('');
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleared = s.replace(/[^a-zA-Z0-9]/g , '').toLowerCase();

    let start = 0;
    let end = cleared.length - 1;
    while(start < end){
        if(cleared[start] !== cleared[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};

var isPalindrome2 = function(s) {
    let start = 0;
    let end = s.length - 1;
    while(start < end){
        if(!isAlphanumeric(s[start])) {
            start++;
            continue;
        }
        if(!isAlphanumeric(s[end])) {
            end--;
            continue;
        }

        if(s[start].toLowerCase() !== s[end].toLowerCase()){
            return false;
        }
        start++;
        end--;
    }
    return true;
};

function isAlphanumeric(s) {
    if('A'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
        return true;
    }
    if('a'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= 'z'.charCodeAt(0)) {
        return true;
    }
    if('0'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= '9'.charCodeAt(0)) {
        return true;
    }
    return false;
}