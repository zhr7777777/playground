/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let cur1 = l1
    let headNode = new ListNode(-Infinity)
    let pre1 = headNode
    headNode.next = l1
    let cur2 = l2
    while(cur1 && cur2) {
        if(cur2.val < cur1.val) {
            let temp = cur2.next
            pre1.next = cur2
            cur2.next = cur1
            cur1 = cur2 // 插入cur2之后要更新cur1
            cur2 = temp
        } else {    // 只有cur2大于等于cur1时，移动cur，要找到cur1大于cur2的位置，即插入位置
            pre1 = cur1
            cur1 = cur1.next
        }
    }
    if(cur2) {
        pre1.next = cur2
    }
    return headNode.next // 不能return l1，因为l1可能是null
};