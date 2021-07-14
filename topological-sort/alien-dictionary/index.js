/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let graph = {};
    words.forEach((word)=>{word.split('').forEach((char)=>graph[char]=[])}); // initialize graph entry for every character

    // build the relationship graph
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i+1];

        // Check that down is not a prefix of top
        if(word1.length > word2.length && word1.startsWith(word2)) {
            return ''; // to satisfy ["abc", "ab"]
        }
        let minLength = Math.min(word1.length, word2.length);
        for (let j=0;j<minLength;j++) {
            if (word1[j]!=word2[j]) {
                graph[word1[j]].push(word2[j]);
                break; // only need to find the first pair
            }
        }
    }
    let seen = {};
    let seeing = {};
    let result = [];

    // regular graph dfs
    // return true if no cycles detected.
    var dfs = function(v) {
        if (seeing[v]) return false;
        if (seen[v]) return true;

        seeing[v] = true;

        for (let nv of graph[v]) {
            if (!dfs(nv)) return false;
        }

        seeing[v] = false;
        seen[v] = true;
        result.push(v);
        return true;
    }

    for (key of Object.keys(graph)) {
        if (!dfs(key)) return "";
    }

    return result.reverse().join('');
};
