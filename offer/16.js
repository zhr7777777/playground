/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 最朴素（超出时间限制）：
// var myPow = function (x, n) {
//   let result = 1
//   for (let i = 0; i < Math.abs(n); i++) {
//     result *= x
//   }
//   return n < 0 ? 1 / result : result
// };

// var myPow = function(x, n) {
//     if(n === 0) return 1

//     let result = x
//     let i = 1
//     while(i < Math.abs(n)) {
//         if(i * 2 < n) {
//             result = result * result
//             console.log(result)
//             i = i * 2
//         } else {
//             result *= x
//             i++
//         }
//     }
//     return n < 0 ? 1 / result : result
// };

// 快速幂：降幂
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n < 0) return myPow(1 / x, -n)
  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2)
};