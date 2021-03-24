/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let currentSum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (!(nums[i] < nums[i + 1])) {
      result = result >= currentSum ? result : currentSum;
      currentSum = 0;
    }
  }
  return result;
};