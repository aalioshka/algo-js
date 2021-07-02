/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ')':'(',
        '}':'{',
        ']':'['
    };

    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            stack.push(s[i]); // this is an open bracket;
        } else {
            // this is an closing bracket
            if(map[s[i]] !== stack.pop()) return false
        }
    }

    return stack.length === 0;
};
