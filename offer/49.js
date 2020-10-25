/**
 * @param {number} n
 * @return {number}
 */
// 5，3，2
// 0, 0, 0 // 1
// 0, 0, 1 // 2
// 0, 1, 0 // 3
// 0, 0, 2 // 4
// 1, 0, 0 // 5
// 0, 1, 1 // 6
// 0, 0, 3 // 8
// 1, 0, 1 // 9

var nthUglyNumber = function (n) {
  let dp = new Array(n - 1)
  let five = 0
  let three = 0
  let two = 0
  dp[0] = 1
  for (let i = 1; i < n; i++) {
    let min = Math.min(dp[five] * 5, dp[three] * 3, dp[two] * 2)
    dp[i] = min
    if (min === dp[five] * 5) five++
    if (min === dp[three] * 3) three++
    if (min === dp[two] * 2) two++
  }
  return dp[n - 1]
};