/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return '[]'
    let queue = [root]
    let result = []
    while(queue.length > 0) {
        let top = queue.shift()
        if(top) {
            result.push(top.val)
            queue.push(top.left)
            queue.push(top.right)
        } else {
            result.push(null)
        }
    }
    while(result[result.length-1] === null) {
        result.pop()
    }
    return JSON.stringify(result)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = JSON.parse(data)
    if(arr.length === 0) return null
    let root = new TreeNode(arr[0])
    let cur = [root]
    arr = arr.slice(1)
    while(arr.length > 0) {
        let temp = []
        for(let i=0; i<cur.length; i++) {
            if(cur[i] !== null) {
                if(arr.length > 0) {
                    let left = arr.shift()
                    cur[i].left = left !== null ? new TreeNode(left) : null
                    temp.push(cur[i].left)
                }
                if(arr.length > 0) {
                    let right = arr.shift()
                    cur[i].right = right !== null ? new TreeNode(right) : null
                    temp.push(cur[i].right)
                }
            }
        }
        cur = temp
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */