/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {
  const result = [];
  // iterate into groups
  for (let i = 0; i < s.length; i += k) {
    // fill group
    let groupString = '';
    for (let j = i; j < k + i; j++) {
      if (j >= s.length) {
        groupString = `${groupString}${fill}`;
      } else {
        groupString = `${groupString}${s[j]}`;
      }
    }
    result.push(groupString);
    groupString = '';
  }
  
  return result;
  
};