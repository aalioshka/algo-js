```javascript
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
// ["A","B","D","E","C","F"]
depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    }
    dfs(start);

    return result;
}

const dfr = g.depthFirstRecursive("A");
console.log(dfr); // ["A","B","D","E","C","F"]
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
```
[all code](index.js)
