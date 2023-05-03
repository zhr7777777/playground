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

const isSymmetricTree = (A, B) => {
    if(!A && B) {
        return false
    }
    if(A && !B) {
        return false
    }
    if(!A && !B) {
        return true
    }
    return A.val === B.val && isSymmetricTree(A.left, B.right) && isSymmetricTree(A.right, B.left)
}

var isSymmetric = function(root) {
    if(!root) {
        return true
    }
    return isSymmetricTree(root.left, root.right)
};