// https://leetcode.com/problems/minimum-suffix-flips/discuss/755939/C%2B%2B-Python-Java%3A-Readable-easy-code-with-explanation-and-code-comments

/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let flips = 0;
    let status = '0';

    for (let i = 0; i < target.length; i++) {
        if (status !== target[i]) {
            flips++;
        }
        status = flips % 2 === 1 ? '1' : '0';
    }

    return flips;
};