/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort(sortNums).join('')
};

const sortNums = (a, b) => {
    a = String(a)
    b = String(b)
    if(a[0] !== b[0]) return a[0] - b[0]
    return Number(a + b) - Number(b + a)
}