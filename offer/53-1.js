/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return 0
  // 优化
  if (nums[0] > target) return 0
  if (nums[nums.length - 1] < target) return 0
  // 二份查找如果需要返回index，需要第三个参数
  const biSearch = (nums, target, start) => {
    if (nums.length === 0) return -1
    let midIndex = parseInt(nums.length / 2)
    if (nums[midIndex] === target) return start + midIndex
    if (nums.length === 1) return -1
    if (nums[midIndex] > target) return biSearch(nums.slice(0, midIndex), target, start)
    if (nums[midIndex] < target) return biSearch(nums.slice(midIndex + 1), target, start + midIndex + 1)
  }
  let index = biSearch(nums, target, 0)
  if (index === -1) return 0
  let count = 1
  for (let i = index + 1; i < nums.length; i++) {
    if (nums[i] === target) count++
  }
  for (let i = index - 1; i >= 0; i--) {
    if (nums[i] === target) count++
  }
  return count
};