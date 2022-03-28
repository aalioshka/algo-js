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

    insert(value){
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }
    }
}

function insertNode(node, newNode) {
    if (newNode.value < node.value) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}
```
[all code](index.js)
