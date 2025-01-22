// neetcode: https://neetcode.io/problems/max-area-of-island

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col] === 1){
                grid[row][col] = -1; // mark as visited
                max = Math.max(exploreIsland(grid, row, col), max);
            }
        }
    }
    return max;
};

function exploreIsland(grid, row, col){
    let area = 1;

    // check up
    if(grid[row+1] && grid[row+1][col] === 1){
        grid[row+1][col] = -1;
        area = area + exploreIsland(grid, row+1, col);
    }

    // check down
    if(grid[row-1] && grid[row-1][col] === 1){
        grid[row-1][col] = -1;
        area = area + exploreIsland(grid, row-1, col);
    }

    // check right
    if(grid[row][col+1] === 1){
        grid[row][col+1] = -1;
        area = area + exploreIsland(grid, row, col+1);
    }

    // check left
    if(grid[row][col-1] === 1){
        grid[row][col-1] = -1;
        area = area + exploreIsland(grid, row, col-1);
    }

    return area;
}

const grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
];

console.log(maxAreaOfIsland(grid)) // 6
