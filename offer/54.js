/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let cur = root
  let stack = []
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.right
    } else {
      let top = stack.pop()
      if (k === 1) return top.val
      k--
      cur = top.left
    }
  }
};