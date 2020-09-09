/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next
  let headNode = new ListNode()
  headNode.next = head
  let pre = headNode
  let cur = head
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
      return head
    }
    pre = cur
    cur = cur.next
  }
};