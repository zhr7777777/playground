/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  if (matrix.length === 1) return matrix[0]
  let result = matrix[0]
  matrix.shift()
  for (let i = 0; i < matrix.length - 1; i++) {
    if (matrix[i].length > 0) { // 需要判断数组是不是空
      result.push(matrix[i].pop())
    }
  }
  result = result.concat(matrix[matrix.length - 1].reverse())
  matrix.pop()
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[matrix.length - i - 1].length > 0) { // 需要判断数组是不是空
      result.push(matrix[matrix.length - i - 1].shift())
    }
  }
  result = result.concat(spiralOrder(matrix))
  return result
};