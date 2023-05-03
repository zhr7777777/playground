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
// var reverseList = function(head) {
//     if(!head) {
//         return null
//     }
//     if(!head.next) {
//         return head
//     }
//     const headNode = reverseList(head.next)
//     head.next.next = head
//     head.next = null
//     return headNode
// };

// var reverseList = function(head) {
//     if(!head) {
//         return null
//     }
//     let headNode = new ListNode()
//     headNode.next = head
//     let pre = headNode
//     let cur = head
//     while(cur) {
//         let temp = cur.next
//         cur.next = pre
//         pre = cur
//         cur = temp
//     }
//     head.next = null
//     return pre
// };

var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    // head.next = null
    return pre
};