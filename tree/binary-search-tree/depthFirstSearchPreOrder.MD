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
    // [10, 5, 2, 7, 13, 11, 16]
    depthFirstSearchPreOrder(){
        let visited = [];
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}
```
[all code](index.js)
