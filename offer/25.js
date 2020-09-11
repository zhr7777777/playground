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
var isSubStructure = function(A, B) {
    if(B === null) return false // 这里注意
    let stack = []
    let cur = A
    while(cur || stack.length) {
        if(cur) {
            if(compare(cur, B)) return true
            stack.push(cur)
            cur = cur.left
        } else {
            let top = stack.pop()
            cur = top.right
        }
    }
    return false
};

function compare(A, B) {
    if(A === null && B === null) return true
    if(A === null && B !== null) return false
    if(A !== null && B === null) return true
    if(A.val !== B.val) return false
    return compare(A.left, B.left) && compare(A.right, B.right)
}