/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    
  const results = [];
  
  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i];
    // find smaller number in i++
    let foundDiscount = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= currentPrice) {
        foundDiscount = prices[j];
        break;
      }
    }
    results.push(currentPrice - foundDiscount);
  }
  
  return results;
  
};