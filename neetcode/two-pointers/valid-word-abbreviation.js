/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let n = word.length;
    let m = abbr.length;
    let i = 0, j = 0;

    while (i < n && j < m) {
        // Leading zero is invalid
        if (abbr[j] === '0') return false;

        if (word[i] === abbr[j]) {
            i++;
            j++;
        } else if (/[a-zA-Z]/.test(abbr[j])) {
            return false;
        } else {
            let subLen = 0;

            while (j < m && /[0-9]/.test(abbr[j])) {
                subLen = subLen * 10 + Number(abbr[j]);
                j++;
            }

            i += subLen;
        }
    }

    return i === n && j === m;
};

console.log(validWordAbbreviation('internationalization', 'i12iz4n')); // true
console.log(validWordAbbreviation('apple', 'a2e')); // false