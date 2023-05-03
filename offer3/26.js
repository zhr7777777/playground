/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var mirrorTree = function(root) {
//     if(!root) {
//         return null // 返回的是TreeNode，要返回null
//     }
//     // 后序遍历
//     mirrorTree(root.left)
//     mirrorTree(root.right)
//     const temp = root.left
//     root.left = root.right
//     root.right = temp
//     return root
// };

var mirrorTree = function(root) {
    let stack = []
    let cur = root
    let pre = null
    while(cur || stack.length) {
        if(cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            let top = stack[stack.length - 1]
            if(!top.right || pre === top.right) {
                const temp = top.left
                top.left = top.right
                top.right = temp
                pre = top
                stack.pop()
            } else {
                cur = top.right
            }
        }
    }
    return root
};