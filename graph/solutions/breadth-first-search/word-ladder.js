// neetcode: https://youtu.be/h9iTnkgv05E

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    const graph = {};
    wordList.push(beginWord);

    for (const word of wordList) {
        for (let j = 0; j < word.length; j++) {
            const pattern = word.slice(0, j) + '*' + word.slice(j + 1); // slice: selected from start to end (end not included)
            if (!graph[pattern]) {
                graph[pattern] = [];
            }
            graph[pattern].push(word);
        }
    }

    const visited = {
        beginWord: true
    };
    const queue = [beginWord];
    let res = 1;

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const word = queue.shift();

            if (word === endWord) {
                return res;
            }

            for (let j = 0; j < word.length; j++) {
                const pattern = word.slice(0, j) + '*' + word.slice(j + 1);

                for (const neiWord of (graph[pattern] || [])) {
                    if (!visited[neiWord]) {
                        visited[neiWord] = true;
                        queue.push(neiWord);
                    }
                }
            }
        }
        res += 1;
    }

    return 0;
};

// Example
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

console.log(ladderLength(beginWord, endWord, wordList)); // 5