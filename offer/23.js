/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return head
    if(head.next === null) return head
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
};