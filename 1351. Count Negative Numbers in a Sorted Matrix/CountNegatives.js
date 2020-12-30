/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  // brute force...
  let count = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] < 0) count++;
    }
  }
  return count;
};