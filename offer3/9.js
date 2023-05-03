/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n === 0) {
//         return 0
//     }
//     if(n === 1) {
//         return 1
//     }
//     return fib(n-1) + fib(n-2)
// };

// 大量重复计算，比如fib(n-1)计算了fib(n-2)，fib(n-2)又计算了一遍

// const cachedNums = [0, 1]
// var fib = function(n) {
//     if(n < cachedNums.length) {
//         return cachedNums[n]
//     }
//     if(n === 0) {
//         return 0
//     }
//     if(n === 1) {
//         return 1
//     }
//     let num = fib(n-1) + fib(n-2)
//     cachedNums.push(num)
//     return cachedNums[n] % 1000000007
// };

// 递归需要使用大量堆栈上的空间，很容易造成栈溢出

var fib = function(n) {
    if(n === 0) {
        return 0
    }
    const dp = new Array(2)
    dp[0] = 0
    dp[1] = 1
    for(let i=2; i<=n; i++) {
        let sum = (dp[0] + dp[1]) % 1000000007
        dp[0] = dp[1]
        dp[1] = sum
    }
    return dp[1]
};