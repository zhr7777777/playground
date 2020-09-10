/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i = 0
    let j = nums.length - 1
    while(j > i) {
        while(nums[i] % 2 === 1 && j > i) {
            i++
        }
        while(nums[j] % 2 === 0 && j > i) {
            j--
        }
        if(j > i) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
    }
    return nums
};