// neetcode: https://youtu.be/iu0082c4HDE

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a + b); // The pop() method of Array instances removes the last element from an array and returns that element
            
        } else if (tokens[i] === '-') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if (tokens[i] === '*') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a * b);
            
        } else if (tokens[i] === '/') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(parseInt( b / a)); // parseInt is for "The division between two integers always truncates toward zero"
            
        } else {
            stack.push(+tokens[i]); // + will convert string to a number
        }
    }
    
    return stack[0];
};

console.log(evalRPN(["2","1","+","3","*"]));  // ((2 + 1) * 3) = 9
console.log(evalRPN(["4","13","5","/","+"])); // (4 + (13 / 5)) = 6