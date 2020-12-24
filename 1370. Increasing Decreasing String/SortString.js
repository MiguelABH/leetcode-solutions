/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  
  // Get characters
  const myChars = {};
  for (let i = 0; i < s.length; i++) {
    if (!myChars[s[i]])
      myChars[s[i]] = 0;
    myChars[s[i]]++;
  }
  
  // Sort caracteres
  const sortedChars = Object.keys(myChars).sort((a, b) => a > b ? 1 : -1);
  
  // Do a two-side iteration
  let charCount = s.length;
  let result = '';
  while (charCount > 0) {
    // back...
    for (let i = 0; i < sortedChars.length; i++) {
      if (myChars[sortedChars[i]] > 0) {
        result = `${result}${sortedChars[i]}`;
        myChars[sortedChars[i]] = myChars[sortedChars[i]] - 1;
        charCount--;
      }
    }
    // forth...
    for (let i = sortedChars.length - 1; i >= 0; i--) {
      if (myChars[sortedChars[i]] > 0) {
        result = `${result}${sortedChars[i]}`;
        myChars[sortedChars[i]] = myChars[sortedChars[i]] - 1;
        charCount--;
      }
    }
    
  }
  
  return result;
};