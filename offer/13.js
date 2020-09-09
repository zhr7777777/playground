/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let queue = [[0, 0]]
  let count = 0
  let visitRecord = []  // 注意要用visitRecord去重
  function insert(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return
    if (getSum(i) + getSum(j) > k) return
    if (visitRecord[i][j] === 1) return // 访问过要不能再入队
    visitRecord[i][j] = 1
    queue.push([i, j])
  }
  for (let i = 0; i < m; i++) {
    visitRecord.push(new Array(n).fill(0))
  }
  visitRecord[0][0] = 1 // 访问记录也要初始化
  while (queue.length > 0) {
    let top = queue.shift()
    let [i, j] = top
    count++
    // insert(i - 1, j) // 本题特殊性，不会往上走
    insert(i + 1, j)
    // insert(i, j - 1) // 本题特殊性，不会往左走
    insert(i, j + 1)
  }
  return count
};

function getSum(num) {
  let result = 0
  while (num) {
    result = result + num % 10
    num = parseInt(num / 10)
  }
  return result
}