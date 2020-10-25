/**
 * @param {number[]} nums
 * @return {number}
 */

var reversePairs = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    let first = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (first > nums[j]) count++
    }
  }
  return count
};