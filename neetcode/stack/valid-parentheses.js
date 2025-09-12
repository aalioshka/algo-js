// neetcode: https://youtu.be/WTzjTskDFMg

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false; // Odd-length strings are invalid

    const closeToOpen = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        const current = closeToOpen[s[i]];
        if (current) { // this is closing prentesis
            if (stack.length && stack[stack.length - 1] === current) {
                stack.pop(); // remove
            } else {
                return false;
            }
        } else { // this is open prentesis
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0;
};

console.log(isValid("()[]{}")); // true