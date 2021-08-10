```javascript
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
// ["A","B","C","D","E","F"]
breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
        
        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
}

const bf = g.breadthFirst("A");
console.log(bf); // ["A","B","C","D","E","F"]
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
```
[all code](index.js)
