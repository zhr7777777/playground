/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true
  let queue = [root]
  while (queue.length) {
    let first = queue.shift()
    if (first.left) queue.push(first.left)
    if (first.right) queue.push(first.right)
    if (first.left || first.right) { // 这里是||, 不是&&
      if (Math.abs(maxDepth(first.left) - maxDepth(first.right)) > 1) {
        return false
      }
    }
  }
  return true
};

var maxDepth = function (root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};