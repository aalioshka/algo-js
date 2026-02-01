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
    const levels = []; // results array

    if(root === null){
        return levels;
    }

    const queue = [root];

    while (queue.length) {
        const level = [];
        const levelLen = queue.length;
        for (let i = 0; i < levelLen; i++) {
            const node = queue.shift();
            level.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }

        levels.push(level);
    }

    return levels;
};