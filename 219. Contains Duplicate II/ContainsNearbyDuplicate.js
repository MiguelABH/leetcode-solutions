/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {

  // find within limits
  // grab number as reference and find duplicate
  // return true if found
  // if not, move to next number
  
  // loop through all numbers
  for (let i = 0; i < nums.length; i++) {
    // loop and find duplicate within limits
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  
  return false;
  
};