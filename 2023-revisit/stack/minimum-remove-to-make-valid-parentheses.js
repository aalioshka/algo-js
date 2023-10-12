// solution is based on the https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let str = s.split('');
    let stack = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] === '(') {
            stack.push(i);
        }
        else if(str[i] === ')'){
            if(stack.length) stack.pop(); // case 1. there was a "(" before - nothing to remove, this is a valid case
            else str[i]= ''; // case 2. there was no "(" before, so we need to remove ")" from the string, to make string valid
        }
    }

    for(let i of stack) str[i] = ''; // we remove all left unclosed "(" from the string, to make string valid

    return str.join('');
};