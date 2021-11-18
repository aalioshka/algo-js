```javascript
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//      10
//   5     13
// 2  7  11  16
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    find(value) {
        return searchNode(this.root, value);
    };
}

function searchNode(node, value) {
    if (node === null) {
        return false;
    }
    if (value < node.value) {
        return searchNode(node.left, value);
    } else if (value > node.value) {
        return searchNode(node.right, value);
    } else {
        return node;
    }
}
```
[all code](index.js)
