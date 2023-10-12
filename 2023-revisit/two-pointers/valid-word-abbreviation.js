/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let abbrPointer = 0;
    let wordPointer = 0;
    let number = 0;

    while(abbrPointer < abbr.length && wordPointer < word.length) {
        if(!isNaN(abbr[abbrPointer])) { // if number
            // "12" will be 1 * 10 + 2
            number = number * 10 + Number(abbr[abbrPointer]);

            // if the new number is zero return false for leading zeros
            if(number === 0) return false;

            abbrPointer++; // increment the abbr pointer
        } else { // if not a number
            if(number > 0) {
                wordPointer += number; // move the word pointer by number spaces
                number = 0; // reset the number
                continue;
            } else {
                if(abbr[abbrPointer] === word[wordPointer]) {
                    abbrPointer++;
                    wordPointer++;
                } else {
                    return false;
                }
            }
        }
    }

    return abbrPointer === abbr.length && wordPointer + number === word.length;
};
/*
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:
Input: word = "internationalization", abbr = "i12iz4n"
Output: true
Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").

Example 2:
Input: word = "apple", abbr = "a2e"
Output: false
Explanation: The word "apple" cannot be abbreviated as "a2e".
 */