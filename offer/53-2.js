/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length === 0) return 0
  let start = 0
  let end = nums.length - 1
  // for(let i=0; i<nums.length; i++) {

  // }
  while (end > start) {
    if (nums[start] + 1 < nums[start + 1]) {
      return nums[start] + 1
    }
    start++
    if (nums[end - 1] + 1 < nums[end]) {
      return nums[end - 1] + 1
    }
    end--
  }
  return nums[0] === 0 ? nums[nums.length - 1] + 1 : 0
};