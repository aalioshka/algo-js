// https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/472789/javascript-Breadth-First-Search-traversing-with-tracking-level-end-by-extra-queue-element

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
    let levels = []; // results array
    if(root === null){
        return levels;
    }

    const levelEnd = '*';
    let queue = [root, levelEnd];
    let level = [] // here we will collect all nodes on the same level from left to right
    levels = [[root.val]]; // first level contais only one root node

    while (queue.length > 1) {
        const node = queue.shift();
        if (node === levelEnd) {
            // we reached out end of the level
            // so 1) we push current level to the levels result array
            // 2) we reset the level array
            // 3) we add pointer to the queue that indicates end of the level
            levels.push(level);
            level = [];
            queue.push(levelEnd);
        } else {
            if(node.left){
                queue.push(node.left);
                level.push(node.left.val);
            }
            if(node.right){
                queue.push(node.right);
                level.push(node.right.val);
            }
        }
    }

    return levels;
};