
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim()
    if(s === '.') return false
    let intReg = /^[\+-]?\d+$/
    let decReg1 = /^[\+-]?\d+\.\d*$/
    let decReg2 = /^[\+-]?\d*\.\d+$/
    if(s.includes('e') || s.includes('E')) {
        let nums = s.split(/[eE]/)
        if(nums.length !== 2) return false
        return (intReg.test(nums[0]) || decReg1.test(nums[0]) || decReg2.test(nums[0])) && intReg.test(nums[1]) 
    }
    if(s.includes('.')) return decReg1.test(s) || decReg2.test(s)
    return intReg.test(s)
};

// 注意.1和1.都是合法数字，所以小数正则分两种情况
// .1e10
// 1.e10

// 讨巧办法
var isNumber = function(s) {
    return s.trim() !== "" && !isNaN(s)
}