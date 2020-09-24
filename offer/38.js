/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let result = new Set()
    let helper = (arr, str) => {
        if(arr.length === 0) {
            // result.push(str)
            result.add(str)
            return
        }
        for(let i=0; i<arr.length; i++) {
            // str = str + arr[i]
            let temp = [].concat(arr)
            temp.splice(i, 1)
            helper(temp, str + arr[i])
        }
    }
    helper(s.split(''), '')
    return [...result]
};