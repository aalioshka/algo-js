// https://neetcode.io/problems/surrounded-regions
// Time Complexity: O(M × N)
// Space complexity: O(M × N) in the worst case 
// for the recursive call stack in DFS if board entirelly 'O'

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // STEP 1. Capture unsurrounded regions - connected to the border
    // O -> T (Temporary)
    // ONLY this step needs DFS
    // Other steps: double for loops only

    // STEP 2. Capture surrounded regions 
    // O -> X

    // STEP 3. Uncapture surrounded regions
    // T -> O

    const ROWS = board.length;
    const COLS = board[0].length;

    // STEP 1.
    for (let r = 0; r < ROWS; r++) {
        if (board[r][0] === 'O') {
            // check LEFT border
            dfs(r, 0);
        }
        if (board[r][COLS - 1] === 'O') {
            // check RIGHT border
            dfs(r, COLS - 1);
        }
    }

    for (let c = 0; c < COLS; c++) {
        if (board[0][c] === 'O') {
            // check UP border
            dfs(0, c);
        }
        if (board[ROWS - 1][c] === 'O') {
            // check DOWN border
            dfs(ROWS - 1, c);
        }
    }

    // STEP 2.
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            }
        }
    }

    // STEP 3.
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === 'T') {
                board[r][c] = 'O';
            }
        }
    }

    function dfs(r, c) {
        if (r < 0 || c < 0 || r == ROWS || c == COLS || board[r][c] !== 'O') {
            // OUT OF BOUNDARY and 'O' check
            return;
        }

        board[r][c] = 'T';
        dfs(r + 1, c); // check UP
        dfs(r - 1, c); // check DOWN
        dfs(r, c + 1); // check RIGHT
        dfs(r, c - 1); // check LEFT
    }
};

const inputBoard = 
[
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
];

const outputBoard = 
[
    ["X","X","X","X"],
    ["X","X","X","X"],
    ["X","X","X","X"],
    ["X","O","X","X"]
];

solve(inputBoard);
console.log(inputBoard); // output outputBoard