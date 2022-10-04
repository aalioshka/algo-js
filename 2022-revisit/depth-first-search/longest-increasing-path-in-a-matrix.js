/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix.length) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    // top, bottom, right, left
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    // build cache matrix, so we do not do any recalculations, as we already have result
    const cache = new Array(rows);
    for (let i = 0; i < cache.length; i++) {
        cache[i] = new Array(cols);
    }

    function dfs(i, j){
        if (cache[i][j]) {
            return cache[i][j];
        }

        let count = 1;
        for(let [xDir, yDir] of dirs){
            let nX = i + xDir;
            let nY = j + yDir;
            if (
                nX >= 0 && nY >= 0 &&
                nX < rows && nY < cols &&
                matrix[nX][nY] > matrix[i][j]
            ) {
                count = Math.max(count, dfs(nX, nY) + 1);
            }
        }
        cache[i][j] = count;
        return count
    };

    let maxCount = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxCount = Math.max(maxCount, dfs(i, j));
        }
    }
    return maxCount;
};