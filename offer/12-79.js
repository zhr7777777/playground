/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(board, word, i, j, 0)) return true
    }
  }
  return false
};

function dfs(board, word, i, j, k) {
  // 边界条件最好先写
  if (k === word.length) return true  // 搜索到路径
  if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] != word[k]) return false // 搜索终止
  let temp = board[i][j]
  board[i][j] = '*'
  let result = dfs(board, word, i - 1, j, k + 1) || // 每执行一个dfs，都会把board[i][j]还原
    dfs(board, word, i + 1, j, k + 1) ||
    dfs(board, word, i, j - 1, k + 1) ||
    dfs(board, word, i, j + 1, k + 1)
  board[i][j] = temp
  return result
}

// [["A","B","C","E"],
// ["S","F","E","S"],
// ["A","D","E","E"]]

// "ABCESEEEFS"