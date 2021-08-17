/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    var res = [];

    if (!matrix || matrix.length === 0 || matrix[0].length === 0) { return res; }

    var ymax = matrix.length - 1;
    var xmax = matrix[0].length - 1;
    var pacific = [];
    var atlantic = [];
    for (let y = 0; y <= ymax; y++) {
        var rowPacific = [];
        var rowAtlantic = [];
        for (let x = 0; x <= xmax; x++) {
            rowPacific.push(false);
            rowAtlantic.push(false);
        }
        pacific.push(rowPacific);
        atlantic.push(rowAtlantic);
    }

    for (let y = 0; y <= ymax; y++) {
        dfs(0, y, pacific, -1, matrix);
        dfs(xmax, y, atlantic, -1, matrix);
    }

    for (let x = 0; x <= xmax; x++) {
        dfs(x, 0, pacific, -1, matrix);
        dfs(x, ymax, atlantic, -1, matrix);
    }

    for (let y = 0; y <= ymax; y++) {
        for (let x = 0; x <= xmax; x++) {
            if (pacific[y][x] && atlantic[y][x]) {
                res.push([y, x]);
            }
        }
    }

    return res;
};

function dfs(x, y, visited, height, matrix) {
    if (x < 0 || x >= matrix[0].length || y < 0 || y >= matrix.length || visited[y][x] || matrix[y][x] < height) {
        return;
    }

    visited[y][x] = true;
    dfs(x + 1, y, visited, matrix[y][x], matrix);
    dfs(x - 1, y, visited, matrix[y][x], matrix);
    dfs(x, y + 1, visited, matrix[y][x], matrix);
    dfs(x, y - 1, visited, matrix[y][x], matrix);
};
