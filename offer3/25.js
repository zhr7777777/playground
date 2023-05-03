/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

const isSubTree = (A, B) => {
    if(!A && B) {
        return false
    }
    if(!A && !B) {
        return true
    }
    if(A && !B) {   // 判断B是否是A的子结构，当A不为null，B为null时，返回true
        return true
    }
    return A.val === B.val && isSubTree(A.left, B.left) && isSubTree(A.right, B.right)
}

// var isSubStructure = function(A, B) {
//     if(!B) {    // 约定空树不是任意一个树的子结构
//         return false
//     }
//     let stack = []
//     let cur = A
//     while(cur || stack.length) {
//         if(cur) {
//             if(isSubTree(cur, B)) {
//                 return true
//             }
//             stack.push(cur)
//             cur = cur.left
//         } else {
//             let top = stack.pop()
//             cur = top.right
//         }
//     }
//     return false
// };

var isSubStructure = function(A, B) {
    // 先序遍历
    // 调用isSubTree访问当前节点，判断以当前节点为根节点时，B是否是子结构，递归调用isSubStructure进行先序遍历
    return A !== null && B !== null && (isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};