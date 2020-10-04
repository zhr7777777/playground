/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let count = 0
    const helper = str => {
        if(str === '') {
            count++
            return
        }
        if(str.length > 1 && str[0] !== '0' && Number(str.slice(0, 2) <= 25)) { // 要排除前导0的情况
            helper(str.slice(2))
        }
        helper(str.slice(1))
    }
    helper(String(num))
    return count
};