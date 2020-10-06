/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const input = [...s];
  const queue = [];
  // Iterate over input array
  for (let i = 0; i < input.length; i++) {
    // if currentchar is an opening char, save it
    const currentChar = input[i];
    if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
      queue.push(currentChar);
    } else {
      // if currentChar is a closing char,
      // verify if last saved character is same type as current char
      if (
        (currentChar === ')' && queue[queue.length - 1] !== '(')
        || (currentChar === '}' && queue[queue.length - 1] !== '{')
        || (currentChar === ']' && queue[queue.length - 1] !== '[')
      ) {
        return false;
      } else {
        queue.pop();
      }
    }
  }
  
  // if queue is not empty, return false because there are missing characters
  if (queue.length > 0) return false;
  
  return true;
};