/**
 * @param {number} n
 * @return {number}
 */
// dp[0] = 0
// dp[1] = 1
// dp[n] = dp[n-1] + dp[n-2]
let cache = [0n, 1n]
var fib = function (n) {
  if (n < cache.length) return cache[n]
  let length = cache.length
  for (let i = 0; i < (n + 1 - length); i++) {
    cache.push(cache[cache.length - 1] + cache[cache.length - 2])
  }
  return cache[cache.length - 1] % 1000000007n  // 需要使用bigInt, 否则会损失精度
};