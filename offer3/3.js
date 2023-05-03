/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let res = nums[0]
    for(let i=0; i<nums.length; i++) {
        while(nums[i] !== i) {
            if(nums[i] === nums[nums[i]]) {
                return nums[i]
            }
            let temp = nums[i]
            nums[i] = nums[temp]    // 这里一定要用temp做索引，因为nums[i]的值变化了
            nums[temp] = temp
        }
    }
    return res
};

// hashset
// 原地置换