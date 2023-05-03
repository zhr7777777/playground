/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim()
    if(s.includes('e') || s.includes('E')) {
        const arr = s.split(/[eE]/)
        return arr.length === 2 && (isInteger(arr[0]) || isDecimal(arr[0])) && isInteger(arr[1])
    }
    return isInteger(s) || isDecimal(s)
};

var isInteger = function(s) {
    return /^[+-]?[0-9]+$/.test(s)
}

var isDecimal = function(s) {
    return /^[+-]?[0-9]+\.[0-9]+$/.test(s) || /^[+-]?[0-9]+\.$/.test(s) || /^[+-]?\.[0-9]+$/.test(s)
}