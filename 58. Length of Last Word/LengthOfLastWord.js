/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const splitted = s.split(' ').filter(word => word !== '');
  return splitted.length === 0 ? 0 : splitted[splitted.length - 1].length;
};