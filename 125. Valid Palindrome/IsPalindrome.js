/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  
  // Function that returns next valid character' index.
  const getNextValidCharIndex = (index, positiveDirection) => {
    if (index === s.length || index === -1) return -1;
    return /^[0-9a-zA-Z]+$/.test(s[index]) ? index : getNextValidCharIndex((positiveDirection? ++index: --index), positiveDirection);
  };
  
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    i = getNextValidCharIndex(i, true);
    j = getNextValidCharIndex(j, false);
    if ((i === -1 && j === -1)) return true;
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    
  }
  
  return true;
  
};
