/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // Read lists
  const mergedList = [];
  
  lists.forEach((currentList) => {
    while (currentList !== null) {
      mergedList.push(currentList.val);
      currentList = currentList.next;
    }
  });
  
  if (mergedList.length === 0) return (new ListNode()).next;
  
  const newList = new ListNode();
  let current = newList;
  
  mergedList
    .sort((a, b) => a > b ? 1 : -1)
    .forEach((n, index) => {
      current.val = n;
      if (index < mergedList.length - 1) {
        current.next = new ListNode();
        current = current.next;
      }
    });
  
  return newList;
  
};