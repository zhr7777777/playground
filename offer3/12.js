/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dfs = (i, j, word) => {
        if(word === '') {
            return true
        }
        if(i >= board.length || i < 0 || j >= board[0].length || j < 0) {
            return false
        }
        if(word[0] !== board[i][j]) {
            return false
        }
        let res = false
        const restWord = word.slice(1)
        const temp = board[i][j]
        board[i][j] = "*"
        res = dfs(i+1, j, restWord) || dfs(i-1, j, restWord) || dfs(i, j+1, restWord) || dfs(i, j-1, restWord)
        board[i][j] = temp
        return res
    }
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(dfs(i, j, word)) {
                return true
            }
        }
    }
    return false
};