/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // leetcode hates this approach :P
  // return [...String(Number(digits.join('')) + 1)];
  
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) digits.unshift(1);
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  
  return digits;
  
};