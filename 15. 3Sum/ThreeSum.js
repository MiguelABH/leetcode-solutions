/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  
  // two pointers
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] > 0) break;
    
    if (x === 0 || nums[x] !== nums[x - 1]) {
      
      let left = x + 1;
      let right = nums.length - 1;
      
      while (left < right) {
        let sum = nums[x] + nums[left] + nums[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          result.push([nums[x], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++; 
        }
      }
    }
  }
  
  return result;
};