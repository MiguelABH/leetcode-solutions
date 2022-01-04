/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generatePascalTriangle = function(numRows) {

  const pascalTriangle = [];

  for (let i = 1; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      let hexagonValue = 0;
      if (pascalTriangle[i - 1]) {
        if (pascalTriangle[i - 1][j - 1]) {
          hexagonValue += pascalTriangle[i - 1][j - 1];
        }
        if (pascalTriangle[i - 1][j]) {
          hexagonValue += pascalTriangle[i - 1][j];
        }
      }
      row.push(hexagonValue);
    }
    pascalTriangle.push(row);
  }

  return pascalTriangle;
}