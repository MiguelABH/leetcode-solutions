/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
  if (nums.length === 1) return nums[0];
  
  let result;
  for (let x = -1; x < nums.length; x++) {
    let currentSum = 0;
    let currentResult;
    for (let y = x + 1; y < nums.length; y++) {
      currentSum += nums[y];
      if (typeof currentResult === 'undefined') currentResult = currentSum;
      currentResult = currentSum >= currentResult ? currentSum : currentResult;
    }
    if (typeof result === 'undefined') result = currentResult;
    result = currentResult >= result ? currentResult : result;
  }
  
  return result;
  
};