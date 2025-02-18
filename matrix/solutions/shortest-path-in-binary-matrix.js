/*

Time complexity: 
O(N^2)
Space complexity: 
O(N^2)

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // length of Grid, row and col are equal
    const L = grid.length;

    // Edge cases:
    // 1) empty grid
    if(grid.length === 0){
        return -1;
    }
    // 2) blocked starting point
    if(grid[0][0] === 1){
        return -1;
    }
    // 3) blocked end point
    if(grid[L - 1][L - 1] === 1){
        return -1;
    }

    // moving directions
    const directions = [
        // 
        [0,1], // right
        [0,-1],// left
        [1,0], // up
        [-1,0],// down
        // diagonals
        [1,1], // right up
        [-1,1],// right down
        [1,-1],// left up
        [-1,-1],// left down
    ];
    
    const queue = [[0, 0, 1]]; // BFS queue: [row, col, path length]
    const visited = {
        "0,0": true // `${r},${c}`
    };

    while (queue.length > 0) {
        const [r, c, length] = queue.shift(); // Dequeue

        if (r === L - 1 && c === L - 1) {
            return length; // Reached bottom-right corner
        }

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            const key = `${nr},${nc}`;

            if (nr >= 0 && nr < L && nc >= 0 && nc < L && 
                grid[nr][nc] === 0 && !visited[key]) {
                queue.push([nr, nc, length + 1]);
                visited[key] = true;
            }
        }
    }
    
    // all possible ways have been checked and no target achieved
    return -1;
};