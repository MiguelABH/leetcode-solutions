/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const sortedNums = nums.sort((a, b) => a < b ? 1 : -1);
  return (sortedNums[0] - 1) * (sortedNums[1] - 1);
};