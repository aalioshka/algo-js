/*

* stack to store numbers.
* current number (num) to accumulate digits.
* previous operator (lastOperator) to determine how to process the current number.

1) iterate through the string:
    * If the character is a digit, we build num
    * If the character is an operator (+, -, *, /) or the last character of the string:
        * Process the previous number based on lastOperator:
            +: Push num onto the stack
            -: Push -num onto the stack
            *: Multiply the last number in the stack by num and replace it
            /: Divide the last number in the stack by num (truncating toward zero) and replace it
        * Reset num and update lastOperator
2) The result is the sum of the stack, which contains all numbers in their correct signs

Time: O(N)
Space: O(N)

*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let currentNum = 0;
    const operators = ['+', '-', '*', '/']
    let lastOperator = '+';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (
            char.charCodeAt(0) >= '0'.charCodeAt(0) 
            && char.charCodeAt(0) <= '9'.charCodeAt(0)
            ) {
                currentNum = currentNum * 10 + (parseInt(char)); // parseInt(char) === Number(char)
        }

        if ((operators.includes(char) ) || i === s.length - 1) {
            if (lastOperator === '+') {
                stack.push(currentNum);
            } else if (lastOperator === '-') {
                stack.push(-currentNum);
            } else if (lastOperator === '*') {
                stack.push(stack.pop() * currentNum);
            } else if (lastOperator === '/') {
                stack.push(parseInt(stack.pop() / currentNum)); // 13.37 -> 13; 42.84 -> 42
            }

            lastOperator = char;
            currentNum = 0;
        }
    }

    // 1) modern 
    // return stack.reduce((a, b) => a + b, 0); 

    // 2) classic

    let sum = 0;
    for(let i = 0; i < stack.length; i++){
        sum += stack[i];
    }
    return sum;
};

console.log(calculate("3+2*2")); // 7
console.log(calculate(" 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5