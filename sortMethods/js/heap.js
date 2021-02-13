const heapAdjust = (nums, i, end) => {
  let maxChildIndex = (i + 1) * 2 - 1
  if(maxChildIndex >= end) return
  if ((i + 1) * 2 < end && nums[(i + 1) * 2] > nums[maxChildIndex]) {
    maxChildIndex = (i + 1) * 2
  }
  if(nums[i] < nums[maxChildIndex]) {
    let temp = nums[i]
    nums[i] = nums[maxChildIndex]
    nums[maxChildIndex] = temp
    heapAdjust(nums, maxChildIndex, end)
  }
}

const heapSort = nums => {
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapAdjust(nums, i, nums.length)
  }
  for(let i = 0; i < nums.length-1; i++) {
    let temp = nums[0]
    nums[0] = nums[nums.length-1-i]
    nums[nums.length-1-i] = temp
    heapAdjust(nums, 0, nums.length-1-i)
  }
}

const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

heapSort(nums2)
console.log(nums2)