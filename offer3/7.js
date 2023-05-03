/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//     if(preorder.length === 0) {
//         return null
//     }
//     for(let i=0; i<inorder.length; i++) {
//         if(inorder[i] === preorder[0]) {
//             let node = new TreeNode(inorder[i])
//             node.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i))
//             node.right = buildTree(preorder.slice(i+1), inorder.slice(i + 1))
//             return node
//         }
//     }
//     return null
// };

// 会创建很多中间数组，问题规模大时，空间复杂度很高

var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) {
        return null
    }
    // 记录root在preorder中的index，inorder子树的头尾index
    const buildTreeNode = (root, start, end) => {
        for(let i=start; i<end; i++) {
            if(inorder[i] === preorder[root]) {
                let node = new TreeNode(preorder[root])
                node.left = buildTreeNode(root + 1, start, i)
                node.right = buildTreeNode(root + 1 + i - start, i + 1, end)
                return node
            }
        }
        return null
    }
    return buildTreeNode(0, 0, inorder.length)
};