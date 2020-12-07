/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  return startTime
    .reduce((acc, val, i) => val <= queryTime && endTime[i] >= queryTime ? acc += 1 : acc, 0);
};