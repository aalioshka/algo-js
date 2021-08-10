```javascript
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
// ["A","C","E","F","D","B"]
depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                stack.push(neighbor)
            }
        });
    }
    return result;
}

const dfi = g.depthFirstIterative("A");
console.log(dfi); // ["A","C","E","F","D","B"]
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
```
[all code](index.js)
