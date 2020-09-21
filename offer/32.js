/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let result = []
    while(queue.length) {
        let first = queue.shift()
        if(first.left) {
            queue.push(first.left)
        }
        if(first.right) {
            queue.push(first.right)
        }
        result.push(first.val)
    }
    return result
};