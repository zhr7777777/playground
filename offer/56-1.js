/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      delete map[nums[i]]
      continue
    }
    map[nums[i]] = 1
  }
  return Object.keys(map)
};