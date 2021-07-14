// https://leetcode.com/problems/coin-change/submissions/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // PART 1  https://www.youtube.com/watch?v=Y0ZqKpToTic
    // PART 2 https://www.youtube.com/watch?v=NJuKJ8sasGk
    // dp[i] represents the least amount of coins that can make the value equals to the i
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0; // for 0 we need 0 coins
    for (const coin of coins) {
        for (let i = 1; i <= amount; i++) {
            if (coin <= i) {
                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1,
                );
            }
        }
    }
    return dp[amount] === amount + 1 ? - 1 : dp[amount];
};
