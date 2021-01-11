/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  // create object of number frequency
  let numFrequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numFrequency[nums[i]]) numFrequency[nums[i]] = 0;
    numFrequency[nums[i]]++;
  }
  
  // sort array by frequency
  const sortedNumFreq = Object.entries(numFrequency).sort((a, b) => {
    if (a[1] === b[1]) return Number(a[0]) < Number(b[0]) ? 1 : -1;
    return a[1] > b[1] ? 1 : -1
  });
  
  // map value multiplied by frequency
  const result = [];
  for (let i = 0; i < sortedNumFreq.length; i++) {
    // frequency...
    for (let f = 0; f < sortedNumFreq[i][1]; f++) {
      result.push(Number(sortedNumFreq[i][0]));
    }
  }
  
  return result;
};