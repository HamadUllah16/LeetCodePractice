// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function convertToString(list) {
    var str = '';
    var currentNode = list;
    while (currentNode) {
        str = currentNode.val + str;
        currentNode = currentNode.next;
    }
    return str;
}
function addTwoNumbers(l1, l2) {
    var list1 = convertToString(l1);
    var list2 = convertToString(l2);
    console.log(list1, list2);
    return null;
}
;
var l11 = new ListNode(3, null);
var l12 = new ListNode(4, l11);
var l13 = new ListNode(2, l12);
var l21 = new ListNode(4, null);
var l22 = new ListNode(6, l21);
var l23 = new ListNode(5, l22);
addTwoNumbers(l13, l23);
