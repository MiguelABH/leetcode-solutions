/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  
  if (n < 4) return n;
  
  // search for target
  let prevA = 2;
  let prevB = 3;
  let ways;
  let cycles = 3;
  
  while (cycles !== n) {
    ways = prevA + prevB;
    cycles++;
    prevA = ways - prevA;
    prevB = ways;
  }
  
  return ways;
};