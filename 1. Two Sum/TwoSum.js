/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let targetNum = target - nums[i];
    const targetIndex = nums.indexOf(targetNum);
    if (targetIndex !== -1 && targetIndex !== i) {
      return [i, targetIndex];
    }
  } 
};