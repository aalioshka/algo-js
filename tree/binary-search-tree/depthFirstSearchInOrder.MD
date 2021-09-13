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
    // [2, 5, 7, 10, 11, 13, 16]
    depthFirstSearchInOrder(){
        let visited = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}
```
[all code](index.js)
