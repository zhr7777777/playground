const quickSortHelper = (nums, start, end) => {
    if(start >= end) return
    let i = start
    let j = end
    let base = nums[end]
    while(i < j) {
      while(i < j && nums[i] <= base) {
        i++
      }
      nums[j] = nums[i]
      while (i < j && nums[j] >= base) {
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
  
  const nums = [49, 38, 65, 97, 76, 13, 27, 49]
  
  quickSort(nums)
  console.log(nums)