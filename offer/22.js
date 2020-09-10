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
    let arr = []
    let cur = head
    while(cur) {
        arr.push(cur)
        cur = cur.next
    }
    return arr[arr.length - k]
};