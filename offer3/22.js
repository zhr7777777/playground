/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let first = head
    let second = head
    for(let i=0; i<k; i++) {
        first = first.next
    }
    while(first) {
        first = first.next
        second = second.next
    }
    return second
};