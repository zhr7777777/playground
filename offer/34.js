/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let stack = []
    let cur = root
    let result = []
    while(cur || stack.length > 0) {
        if(cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            let top = stack[stack.length - 1]
            if(top.visited) {
                if(!top.left && !top.right) {
                    if(getPathSum(stack) === sum) {
                        let temp = [].concat(stack.map(p => p.val))
                        result.push(temp)
                    }
                }
                stack.pop()
            } else {
                top.visited = true
                cur = top.right
            }
        }
    }
    return result
};

function getPathSum(paths) {
    return paths.map(p => p.val).reduce((pre, cur) => {
        pre += cur
        return pre
    }, 0)
}