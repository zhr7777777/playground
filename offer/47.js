/**
 * @param {number[][]} grid
 * @return {number}
 */
// dp[x, y] = max(dp[x - 1, y], dp[x, y - 1])
var maxValue = function (grid) {
  // let x = grid.length - 1
  // let y = grid[0].length - 1
  // let max = grid[x][y]
  if (grid.length === 1) return grid[0].reduce((pre, cur) => pre + cur, 0)
  if (grid[0].length === 1) return grid.reduce((pre, cur) => pre + cur[0], 0)
  let up = grid.slice(0, grid.length - 1)
  let left = grid.map(arr => arr.slice(0, arr.length - 1))
  let maxUp = maxValue(up)
  let maxLeft = maxValue(left)
  return Math.max(maxUp, maxLeft) + grid[grid.length - 1][grid[0].length - 1]
};