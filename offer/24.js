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
    if(!l1) {
        return l2
    }
    if(!l2) {
        return l1
    }
    const p1 = l1
    const p2 = l2
    const pre1 = new ListNode()
    const head1 = pre1
    pre1.next = p1
    while(p1 && p2) {
        if(p2.val < p1.val) {
            const temp = p2.next
            p2.next = p1
            pre1.next = p2
            pre1 = p2   // 注意这里更新 pre1 节点
            p2 = temp
        } else {
            pre1 = p1
            p1 = p1.next
        }
    }
    if(p2) {
        pre1.next = p2
    }
    return head1.next
};

// l1[0] <= l2[0] l1[0] + mergeTwoLists(l1.next, l2) 
// l1[0] > l2[0] l2[0] + mergeTwoLists(l1, l2.next)

var mergeTwoLists = function(l1, l2) {
    if(!l1) {
        return l2
    } else if(!l2) {
        return l1
    } else if(l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

var mergeTwoLists = function(l1, l2) {
    const head = new ListNode()
    let pre = head
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            pre.next = l1
            l1 = l1.next
        } else {
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }
    pre.next = l1 ? l1 : l2
    return head.next
};