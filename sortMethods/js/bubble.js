const bubbleSortWithFlag = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    let hasSorted = true
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
        hasSorted = false
      }
    }
    if (hasSorted) return nums
  }
  return nums
}

const bubbleSortWithPos = nums => {
  let pos = -1
  let k = nums.length - 1
  for (let i = 0; i < nums.length - 1; i++) {
    let hasSorted = true
    for (let j = 0; j < k; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
        hasSorted = false
        pos = j
      }
    }
    if (hasSorted) return nums
    k = pos
  }
  return nums
}

const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

bubbleSortWithPos(nums2)
console.log(nums2)
