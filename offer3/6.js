/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// var reversePrint = function(head) {
//     let cur = head
//     let res = []
//     while(cur) {
//         res.unshift(cur.val)
//         cur = cur.next
//     }
//     return res
// };

var reversePrint = function(head) {
    let res = []
    const reverse = (node) => {
        if(!node) {
            return
        }
        reverse(node.next)
        res.push(node.val)
    }
    reverse(head)
    return res
};