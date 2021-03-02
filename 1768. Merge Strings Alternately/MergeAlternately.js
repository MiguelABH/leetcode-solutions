/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const limit = word1.length > word2.length ? word2.length : word1.length;
  let result = '';
  for (let i = 0; i < limit; i++) {
    result = `${result}${word1[i]}${word2[i]}`;
  }
  if (word1.length !== word2.length) {
    const greatestWord = word1.length > word2.length ? word1 : word2;
    result = `${result}${greatestWord.slice(limit)}`;
  }
  return result;
};