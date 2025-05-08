/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                // Check all 4 directions: up, down, left, right
                let up = (r === 0) ? 0 : grid[r - 1][c];
                let down = (r === rows - 1) ? 0 : grid[r + 1][c];
                let left = (c === 0) ? 0 : grid[r][c - 1];
                let right = (c === cols - 1) ? 0 : grid[r][c + 1];

                // A land cell without any surrounding land cell 
                // will have a perimeter of 4. 
                // Subtract 1 for each surrounding land cell.
                perimeter += 4 - (up + down + left + right);
            }
        }
    }

    return perimeter;
};

let grid = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
]

console.log(islandPerimeter(grid)); // 16