/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let end = 0
  for (let i = 0; i < n; i++) {
    end *= 10
    end += 9
  }
  let result = new Array(end)
  for (let i = 0; i < end; i++) {
    result[i] = i + 1
  }
  return result
};