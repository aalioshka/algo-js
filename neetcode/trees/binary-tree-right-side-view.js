/*

        6
    2       8
  0   4   7    9
     3 5

Output: [6, 8, 9]

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = []; 

    if (!root) return [];

    let queue = [root];
    
    while (queue.length > 0) {
        let levelLength = queue.length;

        for (let i = 0; i < levelLength; i++) { // explore current level
            let node = queue.shift(); // Dequeue

            if (i === levelLength - 1) {
                result.push(node.val); // Push only the rightmost node of this level
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
};