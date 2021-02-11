/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  return accounts.reduce((acc, wealth) => {
    const currentWealth = wealth.reduce((acc, n) => acc + n, 0);
    return currentWealth >= acc ? currentWealth : acc;
  }, 0);
};