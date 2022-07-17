const insertSort = nums => {
    for(let i=1; i<nums.length; i++) {
        const insertValue = nums[i]
        for(let j=i-1; j>=0; j--) {
            if(nums[j] > insertValue) {
                nums[j+1] = nums[j]
            } else {
                nums[j+1] = insertValue
                break
            }
            if(j === 0) {
                nums[j] = insertValue
            }
        }
    }
}

const nums = [49, 38, 65, 97, 76, 13, 27, 49]

insertSort(nums)
console.log(nums)