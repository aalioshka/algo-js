// neetcode: https://neetcode.io/problems/max-area-of-island

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                grid[i][j] = -1; // mark as visited
                max = Math.max(exploreIsland(grid, i, j), max);
            }
        }
    }
    return max;
};

function exploreIsland(grid, i, j){
    let area = 1;

    // check up
    if(grid[i][j+1] === 1){
        grid[i][j+1] = -1;
        area = area + exploreIsland(grid, i, j+1);
    }

    // check down
    if(grid[i][j-1] === 1){
        grid[i][j-1] = -1;
        area = area + exploreIsland(grid, i, j-1);
    }

    // check left
    if(grid[i-1] && grid[i-1][j] === 1){
        grid[i-1][j] = -1;
        area = area + exploreIsland(grid, i-1, j);
    }

    // check right
    if(grid[i+1] && grid[i+1][j] === 1){
        grid[i+1][j] = -1;
        area = area + exploreIsland(grid, i+1, j);
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
