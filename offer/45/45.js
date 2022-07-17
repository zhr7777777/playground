/**
 * @param {number[]} nums
 * @return {string}
 */
//  var minNumber = function(nums) {
//   return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('')
// };

 var minNumber = function(nums) {
  // return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('')
  quickSort(nums)
  return nums.join('')
};

const compare = (a, b) => {
  const s1 = `${a}${b}`
  const s2 = `${b}${a}`
  return s1 - s2
}

const quickSortHelper = (nums, start, end) => {
  if(start >= end) {
      return
  }
  const base = nums[end]
  let i = start
  let j = end
  while(i < j) {
    while(i < j && compare(nums[i], base) <= 0) {
      i++
    }
    nums[j] = nums[i]
    while(i < j && compare(nums[j], base) >= 0) {
      j--
    }
    nums[i] = nums[j]
  }
  nums[i] = base
  quickSortHelper(nums, start, i-1)
  quickSortHelper(nums, j+1, end)
}

const quickSort = nums => {
  quickSortHelper(nums, 0, nums.length-1)
}