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
var isSymmetric = function (root) {
  if (!root) return true
  return compare(root, root)
};

function compare(node1, node2) {
  if (node1 === null && node2 !== null) return false
  if (node1 !== null && node2 === null) return false
  if (node1 === null && node2 === null) return true
  if (node1.val !== node2.val) return false
  // if(node1.val === node2.val) return true  // 这句是错的，当前节点相同，而且子树也要是镜像，而不是返回true
  return node1.val === node2.val && compare(node1.left, node2.right) && compare(node1.right, node2.left)
}