// neetcode: https://youtu.be/WTzjTskDFMg

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const closeToOpen = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if (closeToOpen[s[i]]) { // this is closing prentesis
            if (stack.length && stack[stack.length - 1] === closeToOpen[s[i]]) {
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

console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([])")) // true