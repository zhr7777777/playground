/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let i = 1
    let result = 0
    while(i <= n) {
        result = result + countOne(i)
        i++
    }
    return result
};

function countOne(n) {
    let count = 0
    while(n) {
        if(n % 10 === 1) {
            count++
        }
        n = parseInt(n / 10)
    }
    return count
}