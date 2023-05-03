/**
 * @param {number} n
 * @return {number}
 */
// dp[0] = 1
// dp[1] = 1
// dp[2] = 2
// dp[n] = dp[n-1] + dp[n-2]
var numWays = function(n) {
    if(n === 0) {
        return 1
    }
    const dp = new Array(2)
    dp[0] = 1
    dp[1] = 1
    for(let i=2; i<=n; i++) {
        let sum = (dp[0] + dp[1]) % 1000000007
        dp[0] = dp[1]
        dp[1] = sum
    }
    return dp[1]
};