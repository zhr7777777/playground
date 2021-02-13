const shellInsert = (nums, i, gap) => {
  for (let j = i + gap; j < nums.length; j++) {
    let insertIndex = j
    let insertValue = nums[j]
    while (insertIndex - gap >= 0) {
      if (nums[insertIndex] < nums[insertIndex - gap]) {
        nums[insertIndex] = nums[insertIndex - gap]
        insertIndex -= gap
      } else {
        break
      }
    }
    nums[insertIndex] = insertValue
  }
}

const shellSort = nums => {
  for (let gap = Math.floor(nums.length / 2); gap >= 1; gap = Math.floor(gap / 2)) {
    for (let i = 0; i < gap; i++) {
      shellInsert(nums, i, gap)
    }
  }
  return nums
}

const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

shellSort(nums2)
console.log(nums2)