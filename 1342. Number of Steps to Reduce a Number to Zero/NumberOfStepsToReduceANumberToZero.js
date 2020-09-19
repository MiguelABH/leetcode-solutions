/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num, steps = 0) {
  if (num === 0) {
    return steps;
  }
  steps++;
  num % 2 === 0 ? numberOfSteps(num / 2) : numberOfSteps(num - 1);
};