/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid2 = function(s) { // stack solution
    const unmatchedOpen = []; // stack
    let unmatchedClose = 0;

    for(let ch of s){
        if(ch === "("){
            unmatchedOpen.push(ch);
        } else { // ")"
            if(unmatchedOpen.length > 0) {
                // we have pair
                unmatchedOpen.pop();
            } else {
                unmatchedClose++;
            }
        }
    }

    return unmatchedClose + unmatchedOpen.length;
};

var minAddToMakeValid = function(s) { // no stack, optimized, O(1) for memory
    let unmatchedOpen = 0;
    let unmatchedClose = 0;

    for (let ch of s) {
        if (ch === "(") {
            unmatchedOpen++;
        } else {
            if (unmatchedOpen > 0) {
                unmatchedOpen--;
            } else {
                unmatchedClose++;
            }
        }
    }

    return unmatchedClose + unmatchedOpen;
};