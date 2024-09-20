// neetcode: https://neetcode.io/problems/search-for-word

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === word[0]) {
                if (dfs(row, col, 0)) {
                    return true;
                }
            }
        }
    }
        
    return false;
    
    function dfs(row, col, index) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) {
            return false;
        }
        
        if (index === word.length - 1) {
            return true;
        }

        const save = board[row][col];
        board[row][col] = '#'; // Mark as visited

        const found = dfs(row + 1, col, index + 1) ||
                      dfs(row - 1, col, index + 1) ||
                      dfs(row, col + 1, index + 1) ||
                      dfs(row, col - 1, index + 1);

        board[row][col] = save; // Restore original value
        
        return found;
    }
};

const board = 
[
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE")); // true
console.log(exist(board, "ABCB")); // false