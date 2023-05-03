/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    x = n > 0 ? x : 1 / x
    n = Math.abs(n)
    let res = 1
    while(n) {
        if(n & 1 === 1) {
            res *= x
        }
        n = n >>> 1
        x *= x
    }
    return res
};