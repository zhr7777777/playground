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
// var mergeTwoLists = function(l1, l2) {
//     let headNode = new ListNode()
//     headNode.next = l1
//     let pre1 = headNode
//     let cur1 = l1
//     let cur2 = l2
//     while(cur1 && cur2) {
//         if(cur2.val <= cur1.val) {
//             const temp = cur2.next
//             cur2.next = cur1
//             pre1.next = cur2
//             pre1 = cur2
//             cur2 = temp
//         } else {
//             pre1 = cur1
//             cur1 = cur1.next
//         }
//     }
//     if(cur2) {
//         pre1.next = cur2
//     }
//     return headNode.next
// };

// var mergeTwoLists = function(l1, l2) {
//     let headNode = new ListNode()
//     let cur = headNode
//     let cur1 = l1
//     let cur2 = l2
//     while(cur1 && cur2) {
//         if(cur1.val < cur2.val) {
//             cur.next = cur1
//             cur = cur1
//             cur1 = cur1.next
//         } else {
//             cur.next = cur2
//             cur = cur2
//             cur2 = cur2.next
//         }
//     }
//     cur.next = cur1 ? cur1 : cur2
//     return headNode.next
// };

var mergeTwoLists = function(l1, l2) {
    if(!l1) {
        return l2
    }
    if(!l2) {
        return l1
    }
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};