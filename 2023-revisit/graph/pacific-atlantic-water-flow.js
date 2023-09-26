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
        dfs(r + 1, c, visit, matrix[r][c]);
        dfs(r - 1, c, visit, matrix[r][c]);
        dfs(r, c + 1, visit, matrix[r][c]);
        dfs(r, c - 1, visit, matrix[r][c]);
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac, matrix[0][c]);
        dfs(ROWS - 1, c, atl, matrix[ROWS - 1][c]);
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, matrix[r][0]);
        dfs(r, COLS - 1, atl, matrix[r][COLS - 1]);
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
};// https://www.youtube.com/watch?v=s-VkcjHqkGI

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
        dfs(r + 1, c, visit, matrix[r][c]);
        dfs(r - 1, c, visit, matrix[r][c]);
        dfs(r, c + 1, visit, matrix[r][c]);
        dfs(r, c - 1, visit, matrix[r][c]);
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac, matrix[0][c]);
        dfs(ROWS - 1, c, atl, matrix[ROWS - 1][c]);
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, matrix[r][0]);
        dfs(r, COLS - 1, atl, matrix[r][COLS - 1]);
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