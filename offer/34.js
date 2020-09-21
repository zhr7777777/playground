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
    if(!root) return []
    let queue = [root]
    let result = []
    let level = 0
    while(queue.length > 0) {
        let nextLevel = []
        let temp = []
        while(queue.length > 0) {
            let first = queue.shift()
            if(first.left) {
                nextLevel.push(first.left)
            }
            if(first.right) {
                nextLevel.push(first.right)
            }
            if(level % 2 === 0) {
                temp.push(first.val)
            } else {
                temp.unshift(first.val)
            }
        }
        level++
        result.push(temp)
        queue = nextLevel
    }
    return result
};