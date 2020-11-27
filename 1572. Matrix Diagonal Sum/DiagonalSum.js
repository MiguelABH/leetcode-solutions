/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  if (!mat.length) return 0;

  // Sum diagonals...
  const matrixSize = mat.length;
  let sum = 0;
  for (let x = 0; x < matrixSize; x++) {
    sum += mat[x][x];
    // add second diagonal
    sum += mat[x][matrixSize - (x + 1)];
  }

  // substract matrix center if matrixSize is odd
  if (matrixSize % 2) {
    const matrixCenter = Math.floor(matrixSize / 2);
    sum -= mat[matrixCenter][matrixCenter];
  }

  return sum;
};