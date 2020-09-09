/**
 * @param {number} n
 * @return {number}
 */
// dp[1] = 1
// dp[2] = 2
// dp[3] = 3
// dp[n] = max(dp[i] * dp[n-i])
let dp = [0n, 1n, 2n, 3n]
var cuttingRope = function (n) {
  if (n === 2) return 1
  if (n === 3) return 2
  if (n < dp.length) return dp[n] % 1000000007n
  let length = dp.length
  for (let i = length; i < n + 1; i++) {
    let max = -1n
    for (let j = 2; j <= i / 2; j++) {
      if (dp[j] * dp[i - j] > max) {
        max = dp[j] * dp[i - j]
      }
    }
    dp.push(max)
  }
  return dp[n] % 1000000007n
};