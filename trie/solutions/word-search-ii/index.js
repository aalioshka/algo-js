// neetcode: https://neetcode.io/problems/search-for-word-ii

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let res = [];
  
    const root = buildTrie(words);
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        dfs(row, col, root);
      }
    }
    return res;
      
    function dfs(row, col, node) {
      if (node.end) {
        res.push(node.end);
        node.end = null;   // make sure only print one time for each word
      }
  
      if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || !node[board[row][col]]) {
          return;
      }
  
      const c = board[row][col];
      board[row][col] = '#';  // mark visited
      dfs(row + 1, col, node[c]); // up
      dfs(row - 1, col, node[c]); // down
      dfs(row, col + 1, node[c]); // right
      dfs(row, col - 1, node[c]); // left
      board[row][col] = c;  // reset - back track
    }
  
};
  
function buildTrie(words) {
      const root = {};
      for (let w of words) {
        let pointer = root; // here 'pointer' just a reference, that we use to go down from root till last child node
                            // and when we rich last child node - this is the end of the world
                            // and instead of setting "node.end = true", we set "node.end = word"
        for (let c of w) {
          if (!pointer[c]) pointer[c] = {}; // if we already have such node, lets ignore it creating and just move the pointer
          pointer = pointer[c];
        }
        pointer.end = w; 
      }
      return root;
}

const board = 
[
    ["o","a","a","n"],
    ["e","t","a","e"],
    ["i","h","k","r"],
    ["i","f","l","v"]
];
const words = ["oath","pea","eat","rain"];
console.log(findWords(board, words)); // ["eat","oath"]

const board2 = 
[
    ["a","b"],
    ["c","d"]
];
const words2 = ["abcb"];
console.log(findWords(board2, words2)); // []