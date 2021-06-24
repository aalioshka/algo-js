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
 * @return {number}
 */
var maximumAverageSubtree = function(root) {

    //      10
    //   5     13
    // 2  7  11  16

    // depth first search post order traversing:
    // [2, 7, 5, 11, 16, 13, 10]
    function traverse(node){
        if (!node) return { sum: 0, count: 0, maxAvg: 0 };

        const left = traverse(node.left);
        const right = traverse(node.right);

        const sum = left.sum + right.sum + node.val;
        const count = left.count + right.count + 1;
        const maxAvg = Math.max(left.maxAvg, right.maxAvg, sum / count);

        return { sum, count, maxAvg };
    }

    return traverse(root).maxAvg;
};
