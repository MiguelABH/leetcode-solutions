/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let base = height[i] < height[j] ? height[i] : height[j];
      let containedWater = base * (j - i);
      if (containedWater >= result) {
        result = containedWater;
      }
    }
  }
  
  return result;
};