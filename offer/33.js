/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if(postorder.length === 0) return true
    if(postorder.length === 1) return true
    if(postorder.length === 2) return true
    let root = postorder[postorder.length - 1]
    let left = []
    let right = []
    let i
    for(i=0; i<postorder.length-1; i++) {
        if(postorder[postorder.length-2-i] > root) {
            right.unshift(postorder[postorder.length-2-i])
        } else {
            break
        }
    }
    left = postorder.slice(0, postorder.length-1-i)
    if(Math.max(...left) > root) return false
    return verifyPostorder(left) && verifyPostorder(right)
};