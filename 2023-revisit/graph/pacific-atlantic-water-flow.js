// https://www.youtube.com/watch?v=s-VkcjHqkGI

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    const pac = new Set();
    const atl = new Set();

    function dfs(r, c, visit, prevHeight) {
        if (
            visit.has(`${r},${c}`) ||
            r < 0 ||
            c < 0 ||
            r === ROWS ||
            c === COLS ||
            matrix[r][c] < prevHeight
        ) {
            return;
        }

        visit.add(`${r},${c}`);
        dfs(r + 1, c, visit, matrix[r][c]); // up
        dfs(r - 1, c, visit, matrix[r][c]); // down
        dfs(r, c + 1, visit, matrix[r][c]); // right
        dfs(r, c - 1, visit, matrix[r][c]); // left
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac, matrix[0][c]); // first row
        dfs(ROWS - 1, c, atl, matrix[ROWS - 1][c]); // last row
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, matrix[r][0]); // first column
        dfs(r, COLS - 1, atl, matrix[r][COLS - 1]); // last column
    }

    const res = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
                res.push([r, c]);
            }
        }
    }

    return res;
};