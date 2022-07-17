const selectSort = nums => {
    for(let i=0; i<nums.length-1; i++) {
        let maxIndex = 0
        for(let j=1; j<nums.length-i; j++) {
            if(nums[j] > nums[maxIndex]) {
                maxIndex = j
            }
        }
        const temp = nums[nums.length-i-1]
        nums[nums.length-i-1] = nums[maxIndex]
        nums[maxIndex] = temp
    }
}

const nums = [49, 38, 65, 97, 76, 13, 27, 49]

selectSort(nums)
console.log(nums)