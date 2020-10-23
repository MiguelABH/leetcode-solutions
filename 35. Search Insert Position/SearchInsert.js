/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = 0;
  let currentNumber = nums[index];
  while (currentNumber < target) {
    if (currentNumber === target) break;
    index++;
    currentNumber = nums[index];
  }
  return index;
};