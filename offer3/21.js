/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let start = 0
    let end = nums.length - 1
    while(start <= end) {
        if(nums[start] % 2 === 0 && nums[end] % 2 === 1) {
            const temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        } else if(nums[start] % 2 === 0 && nums[end] % 2 === 0) {
            end--
        } else if(nums[start] % 2 === 1 && nums[end] % 2 === 0) {
            start++
            end--
        } else {
            start++
        }
    }
    return nums
};