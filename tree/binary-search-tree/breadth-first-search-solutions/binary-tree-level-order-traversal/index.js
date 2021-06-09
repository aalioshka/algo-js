// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = [];
    if(root === null){
        return levels;
    }

    let queue = [root];
    levels = [[root.val]];

    while (queue.length) {
        let levelLength = queue.length;
        let level = [];
        for(let i = 0; i < levelLength; i++){
            const node = queue.shift();
            if(node.left){
                queue.push(node.left);
                level.push(node.left.val);
            }
            if(node.right){
                queue.push(node.right);
                level.push(node.right.val);
            }
        }
        if (level.length) {
            levels.push(level);
        }
    }

    return levels;
};
