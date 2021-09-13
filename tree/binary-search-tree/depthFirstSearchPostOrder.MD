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
    // [2, 7, 5, 11, 16, 13, 10]
    depthFirstSearchPostOrder(){
        let visited = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(this.root);
        return visited;
    }
}
```
[all code](index.js)
