/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null
  let curA = headA
  let curB = headB
  let finishA = false
  let finishB = false
  while (curA) {
    if (curA === curB) return curA
    curA = curA.next
    curB = curB.next
    if (!curA && finishA === false) {
      curA = headB
      finishA = true
    }
    if (!curB && finishB === false) {
      curB = headA
      finishB = true
    }
  }
  return null
};