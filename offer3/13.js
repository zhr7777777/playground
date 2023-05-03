/**
 * @param {number} n
 * @return {number}
 */
// dp[2] = 1
// dp[3] = 2
// dp[4] = 4
// dp[n] = max(dp[n-1], dp[n-2]*2)
var cuttingRope = function(n) {
    if(n === 2) {
        return 1
    }
    if(n === 3) {
        return 2
    }
    let dp = new Array(n+1)
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    for(let i=4; i<=n; i++) {
        let max = -1
        for(let j=1; j<=i/2; j++) {
            max = Math.max(dp[i-j] * dp[j], max)
        }
        dp[i] = max
    }
    return dp[n]
};