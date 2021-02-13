const quickSortHelper = (nums, start, end) => {
  if(start >= end) return
  let i = start
  let j = end
  let base = nums[end]
  while(i < j) {
    while(nums[i] <= base) {
      if(i >= j) break
      i++
    }
    nums[j] = nums[i]
    while (nums[j] >= base) {
      if (i >= j) break
      j--
    }
    nums[i] = nums[j]
  }
  nums[i] = base
  quickSortHelper(nums, start, i - 1)
  quickSortHelper(nums, j + 1, end)
}

const quickSort = nums => {
  quickSortHelper(nums, 0, nums.length - 1)
}

const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

quickSort(nums2)
console.log(nums2)