/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    if (!grid || grid.length === 0) return 0;

    const directions = [
        [1, 0],  // up
        [-1, 0], // down
        [0, -1], // left
        [0, 1]   // right
    ];

    let visited = {};
    visited[`0-0-${k}`] = 1;

    const rows = grid.length;
    const cols = grid[0].length;

    let queue = [[0, 0, k]]; // Starting coordinates and k
    let moves = 0;

    while(queue.length > 0) {
        let nextMoves = [];

        // one level explore
        while(queue.length > 0) {
            let [x, y, remainingK] = queue.pop();

            if(x === rows - 1 && y === cols - 1) return moves; // we are at the destination

            for (const direction of directions) {
                let row = x + direction[0];
                let col = y + direction[1];

                // check out of matrix and if more obstacles to remove then we can
                if(row < 0 || col < 0 || row >= rows || col >= cols
                    || grid[row][col] === 1 && remainingK === 0) {
                    continue;
                }

                let newK = remainingK;
                // decrememnt k while discovering next 4 neighbords if obstacle
                if (grid[row][col] === 1) {
                    newK = remainingK - 1;
                }

                const key = `${row}-${col}-${newK}`;

                if(!visited[key]) {
                    visited[key] = 1;
                    nextMoves.push([row, col, newK]);
                }
            }
        }

        queue = nextMoves;
        moves++;
    }

    return -1;

};