/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = []

  const dfs = arr => {
    if (res.length === k) {
      return
    }
    if (arr.length === n) {
      res.push(arr.join(''))
      return
    }
    for (let i = 0; i < n; i++) {
      let char = String(i + 1)
      if (arr.includes(char)) {
        continue
      }
      arr.push(char)
      dfs(arr)
      arr.pop(char)
    }
  }
  dfs([])
  return res[res.length - 1]
};