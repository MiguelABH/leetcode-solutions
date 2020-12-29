/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  let result = '';
  for (let i = 1; i < n; i++) {
    result = `${result}a`;
  }
  return !(n % 2) ? `${result}z` : `${result}a`;
};