/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 讨巧办法
var isMatch = function(s, p) {
    let reg = new RegExp('^' + p + '$')
    return reg.test(s)
};

// todo
// 常规方法