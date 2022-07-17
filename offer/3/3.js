/**
 * @param {number[]} nums
 * @return {number}
 */
// time: O(n)
// space: O(1)
 var findRepeatNumber = function(nums) {
    if(nums.length === 0) {
        return -1
    } 
    for(let i=0; i<nums.length; i++) {
        while(nums[i] !== i) {
            if(nums[nums[i]] === nums[i]) {
                return nums[i]
            } else {
                const temp = nums[nums[i]]
                nums[nums[i]] = nums[i]
                nums[i] = temp
            }
        }
    }
    return -1
};

// time: O(n)
// space: O(n)
var findRepeatNumber = function(nums) {
    if(nums.length === 0) {
        return -1
    }
    const arr = new Array(nums.length)
    for(let i=0; i<nums.length; i++) {
        if(arr[nums[i]] === nums[i]) {
            return nums[i]
        }
        arr[nums[i]] = nums[i]
    }
    return -1
};

var findRepeatNumber = function(nums) {
    if(nums.length === 0) {
        return -1
    }
    let start = 0
    let end = nums.length - 1
    while(end >= start) {
        const mid = start + Math.floor((end - start) / 2)
        const count = countRange(nums, start, mid)
        if(count > (mid - start) + 1) {
            end = mid
        } else {
            start = mid + 1
        }
        if(end === start) {
            return nums[start]
        }
    }
    return -1
};

var countRange = function(nums, start, mid) {
    let count = 0
    for(let i=0; i<nums.length; i++) {
        if(nums[i] >= start || nums[i] <= mid) {
            count++
        }
    }
    return count
}

