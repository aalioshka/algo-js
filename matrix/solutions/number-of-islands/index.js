/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === '1') {
                grid[row][col] = -1; // mark as visited
                num++;
                
                // 1) solution Depth First Search
                dfs(grid, row, col);
                
                // 2) solution Breadth First Search
                // bfs(grid, row, col); 
            }
        }
    }
    return num;
};

function dfs(grid, rid, cid) {
    // check up
    if(grid[rid+1] && grid[rid+1][cid] === '1'){
        grid[rid+1][cid] = -1; // mark as visited
        dfs(grid, rid+1, cid);
    }
    
    // check down
    if(grid[rid-1] && grid[rid-1][cid] === '1') {
        grid[rid-1][cid] = -1; // mark as visited
        dfs(grid, rid-1, cid);
    }
    
    // check right
    if(grid[rid][cid+1] === '1') {
        grid[rid][cid+1] = -1; // mark as visited
        dfs(grid, rid, cid+1);
    }
    
    // check left
    if(grid[rid][cid-1] === '1') {
        grid[rid][cid-1] = -1; // mark as visited
        dfs(grid, rid, cid-1);
    }
}

function bfs(grid, rid, cid) {
    let queue = [[rid, cid]];
    
    while(queue.length) {
        let [r, c] = queue.shift();
        
        // check up
        if(grid[r+1] && grid[r+1][c] === '1'){
            grid[r+1][c] = -1; // mark as visited
            queue.push([r+1, c]);
        }

        // check down
        if(grid[r-1] && grid[r-1][c] === '1') {
            grid[r-1][c] = -1; // mark as visited
            queue.push([r-1, c]);
        }

        // check right
        if(grid[r][c+1] === '1') {
            grid[r][c+1] = -1; // mark as visited
            queue.push([r, c+1]);
        }

        // check left
        if(grid[r][c-1] === '1') {
            grid[r][c-1] = -1; // mark as visited
            queue.push([r, c-1]);
        }       
    }
    
}

const grid = 
[
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

console.log(numIslands(grid)); // 1