/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root) return root
    let cur = root
    let stack = []
    let pre = null
    let head = null
    let tail = null
    while(cur || stack.length) {
        if(cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            let top = stack.pop()
            if(pre === null) {
                head = top
                pre = top
            } else {
                pre.right = top
                top.left = pre
                pre = top
            }
            if(!top.right && stack.length === 0) {
                tail = top
            }
            cur = top.right
        }
    }
    tail.right = head
    head.left = tail
    return head
};