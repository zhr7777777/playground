/**
 * @param {number} n
 * @return {number}
 */
// dp[1] = 1
// dp[2] = 2
// dp[3] = 3
// dp[4] = 4
// dp[5] = 6
// dp[n] = max(dp[i] * dp[n-i])
var cuttingRope = function (n) {
  if (n === 2) return 1
  if (n === 3) return 2
  let dp = [0, 1, 2, 3]
  for (let i = 4; i <= n; i++) {
    let max = -1
    for (let j = 2; j <= n / 2; j++) {
      if (dp[j] * dp[i - j] > max) {
        max = dp[j] * dp[i - j]
      }
    }
    dp.push(max)
  }
  return dp[n]
};