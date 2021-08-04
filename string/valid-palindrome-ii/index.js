/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while(start < end) {
        if (s[start] !== s[end]) {
            return isPalindrome(cut(s, start)) || isPalindrome(cut(s, end));
        }
        start++;
        end--;
    }
    return true
};

function isPalindrome(s){
    let start = 0;
    let end = s.length - 1;
    while(start < end) {
        if(s[start] !== s[end]) return false;
        start++;
        end--;

    }
    return true;
}

function cut(s, i) {
    return s.substring(0, i) + s.substring(i + 1);
};
