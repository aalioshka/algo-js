/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root){
        return null;
    }

    let level = 0;
    let current = root;
    let queue = [root];

    while(queue.length){
        let currentLevelLength = queue.length;

        for(let i = 0; i < currentLevelLength; i++){
            current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }

        level++;
    }

    return level;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function(root) {
    if (!root){
        return null;
    }

    let depth = 1;
    const LEVEL_END = '*';
    let current = root;
    let queue = [root, LEVEL_END];

    while(queue.length > 1){
        current = queue.shift();

        if(current === LEVEL_END){
            depth++;
            queue.push(LEVEL_END);
        }else{
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }

    return depth;
};

// Recursion

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth3 = function(root) {
    if (!root){
        return null;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};