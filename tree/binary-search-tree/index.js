class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
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
    find(value) {
        return searchNode(this.root, value);
    };

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

// test

//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.find(13)); // Node
console.log(tree.find(7)); // Node
console.log(tree.find(9)); // false
console.log(tree.find(10)); // Node
console.log(tree.breadthFirstSearch()); // [10, 5, 13, 2, 7, 11, 16]
console.log(tree.depthFirstSearchPreOrder()); // [10, 5, 2, 7, 13, 11, 16]
console.log(tree.depthFirstSearchPostOrder()); // [2, 7, 5, 11, 16, 13, 10]
console.log(tree.depthFirstSearchInOrder()); // [2, 5, 7, 10, 11, 13, 16]
