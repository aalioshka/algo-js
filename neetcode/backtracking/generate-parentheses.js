// neetcode: https://youtu.be/s9fokUqJ76A

/*

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // only add open paranthesis if open < n
    // only add a closing paranthesis if closed < open
    // valid if open == closed == n
    
    let stack = []
    let res = []
    
    function backtrack(openN, closedN) {
        if (openN === closedN && openN === n) {
            res.push(stack.join(''));
            return;
        }
        
        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closedN);
            stack.pop();
        }
        
        if (closedN < openN) {
            stack.push(')');
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }
    
    backtrack(0, 0);
    
    return res;
};