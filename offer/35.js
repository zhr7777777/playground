
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let headNode = new Node(-1, null, null)
    let pre = headNode
    let cur = head
    let copyMap = new Map()
    while(cur) {
        let copy = new Node(cur.val, null, null)
        copyMap.set(cur, copy)
        pre.next = copy
        pre = copy
        cur = cur.next
    }
    cur = head
    let copyCur = headNode.next
    while(cur) {
        if(cur.random) {
            copyCur.random = copyMap.get(cur.random)
        }
        copyCur = copyCur.next
        cur = cur.next
    }
    return headNode.next
};