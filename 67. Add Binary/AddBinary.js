/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  
  let result = '';
  
  let carryBit = 0;
  for (let x = a.length - 1, y = b.length - 1; x >= 0 || y >= 0; x--, y--) {
    
    let valA = a[x] !== undefined ? parseInt(a[x]) : 0;
    let valB = b[y] !== undefined ? parseInt(b[y]) : 0;
    
    let sum = valA + valB + carryBit;
    
    switch(sum) {
      case 0:
        result = `0${result}`;
        carryBit = 0;
      break;
      case 1:
        result = `1${result}`;
        carryBit = 0;
      break;
      case 2:
        result = `0${result}`;
        carryBit = 1;
      break;
      case 3:
        result = `1${result}`;
        carryBit = 1;
      break;
    }
    
  }
  
  return carryBit ? `1${result}` : result;
};