/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // 1. build graph
    let graph = {};
    
    for (let i = 0; i < n; i++){
         graph[i] = [];
    }

    edges.forEach(([v1, v2]) =>{
        graph[v1].push(v2);
        graph[v2].push(v1);
    });


    let visited = {};
    let connectedComponents = [];
    
    // 2. travers
    for (let i = 0; i < n; i++){
         if(!visited[i]){
            let connectedComponent = dfs(i, []); 
             if(connectedComponent.length) {
                 connectedComponents.push(connectedComponent);
             }
         }
    }

    function dfs(node, connectedComponent){
        if(visited[node]) return connectedComponent;
        connectedComponent.push(node);
        visited[node] = true;
        graph[node].forEach(v => dfs(v, connectedComponent));
        return connectedComponent;
    }

    return connectedComponents.length;
};

/*

0 - 1     3
    |     |
    2     4
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
*/

console.log(countComponents(5, [[0,1],[1,2],[3,4]])) // will output 2
