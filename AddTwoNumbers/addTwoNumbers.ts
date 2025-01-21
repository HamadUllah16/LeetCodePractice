
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function convertToString(list: ListNode | null): string {
    let str = ''
    let currentNode: ListNode | null = list;

    while (currentNode) {
        str = currentNode.val + str;
        currentNode = currentNode.next;
    }
    return str;
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const list1 = convertToString(l1);
    const list2 = convertToString(l2);

    console.log(list1 + list2);

    return null
};



let l11 = new ListNode(3, null);
let l12 = new ListNode(4, l11);
let l13 = new ListNode(2, l12);

let l21 = new ListNode(4, null);
let l22 = new ListNode(6, l21);
let l23 = new ListNode(5, l22);

addTwoNumbers(l13, l23);