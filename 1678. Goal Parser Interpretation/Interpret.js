/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let result = '';
  
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      result = `${result}G`;
      continue;
    }
    if (command[i] === '(') {
      if (command[i + 1] === ')') {
        result = `${result}o`;
        i++;
      } else {
        result = `${result}al`;
        i += 2;
      }
    }
  }
  
  return result;
};