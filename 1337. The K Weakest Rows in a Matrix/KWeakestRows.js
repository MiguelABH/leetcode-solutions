/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  return mat
    .map((row, index) => ({ index, soldiers: row.reduce((s, acc) => s += acc, 0) }))
    .sort((rowA, rowB) => rowA.soldiers - rowB.soldiers)
    .map(row => row.index)
    .slice(0, k);
};