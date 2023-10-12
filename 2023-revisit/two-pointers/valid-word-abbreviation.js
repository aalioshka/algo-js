/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0;
    let j = 0;
    let number = 0;

    while(i < abbr.length && j < word.length) {
        if(!isNaN(abbr[i])) { // if number
            // add the number to the previous number times 10
            // for example "12" will be 1 first then 10 + 2
            number = number * 10 + Number(abbr[i]);

            // if the new number is zero return false for leading zeros
            if(number === 0) return false;

            i++; // increment the abbv pointer
        } else if(number > 0) {
            j += number; // move the word pointer by number spaces
            number = 0; // reset the number
        }
        else if(abbr[i] === word[j]) { // if the characters match
            // increment both pointers
            i++;
            j++;
        }
        // otherwise the characters don't match so return false
        else return false;
    }
    // the abbv is valid if the abbv pointer made it all the way through the string
    // and the word pointer plus any remaining number made it through the string
    return i === abbr.length && j + number === word.length;
};