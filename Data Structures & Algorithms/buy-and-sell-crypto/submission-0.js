class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minprice = prices[0];

        for(let i=1; i<prices.length; i++){
            maxProfit = Math.max(maxProfit,prices[i]-minprice);
            minprice = Math.min(minprice, prices[i])
        };
        return maxProfit;
    }
}
