/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  
  const numArr = [...num.toString()];
  
  // find most significant 6
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === '6') {
      numArr[i] = '9';
      break;
    }
  }
  
  return Number(numArr.join(''));
  
};