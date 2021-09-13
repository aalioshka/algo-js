```javascript
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    //      10
    //   5     13
    // 2  7  11  16
    // [10, 5, 13, 2, 7, 11, 16]
    breadthFirstSearch(){
        let node = this.root;
        let visited = [];
        let queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            visited.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;
    }
}
```
[all code](index.js)
