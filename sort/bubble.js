// const bubbleSort = nums => {
//     for(let i=0; i<nums.length-1; i++) {
//         let sorted = true
//         for(let j=0; j<nums.length-i-1; j++) {
//             if(nums[j] > nums[j+1]) {
//                 const temp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//                 sorted = false
//             }
//         }
//         if(sorted) {
//             break
//         }
//     }
// }

const bubbleSort = nums => {
    let k = nums.length - 1
    for(let i=0; i<nums.length-1; i++) {
        let pos = nums.length - i - 1
        for(let j=0; j<k; j++) {
            if(nums[j] > nums[j+1]) {
                const temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
                pos = j
            }
        }
        k = pos
    }
}

const nums = [49, 38, 65, 97, 76, 13, 27, 49]

bubbleSort(nums)
console.log(nums)