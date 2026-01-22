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
    let depth = 0;
    if (!root){
        return depth;
    }
    let queue = [root];
    
    while(queue.length){
        let currentLevelLength = queue.length;
        
        for(let i = 0; i < currentLevelLength; i++){
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
        depth++;
    }
    
    return depth;
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
        return 0;
    }
    
    return 1 + Math.max(maxDepth3(root.left), maxDepth3(root.right));
};