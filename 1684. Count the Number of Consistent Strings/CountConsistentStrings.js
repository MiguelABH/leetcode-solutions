/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  return words.reduce((acc, word) => {
    // iterate over all chars from word
    // check if 'allowed' includes them
    var isConsistentWord = function(word) {
      for (let i = 0; i < word.length; i++) {
        if (!allowed.includes(word[i])) return false;
      }
      return true;
    };
    return isConsistentWord(word) ? acc += 1 : acc;
  }, 0);
};