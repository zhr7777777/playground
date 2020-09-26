/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let count = 1 // 找到是几位数
    let up = 9
    while(n > up) {
        n = n - up
        count++
        up = 9 * Math.pow(10, count-1) * count
    }
    // 还原第n位对应的数字
    let num = Math.pow(10, count-1) + parseInt((n - 1) / count)
    return String(num).charAt((n - 1) % count)
};