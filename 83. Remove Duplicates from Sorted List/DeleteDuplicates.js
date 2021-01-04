/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let result = new ListNode(null);
  const start = result;
  
  while (head !== null) {
    if (head.val !== result.val) {
      result.next = new ListNode(head.val);
      result = result.next;
    }
    head = head.next;
  }
  
  return start.next;
};
