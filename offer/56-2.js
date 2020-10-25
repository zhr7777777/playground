/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      if (map[nums[i]] === 1) {
        map[nums[i]]++
      } else {
        delete map[nums[i]]
      }
      continue
    }
    map[nums[i]] = 1
  }
  return Object.keys(map)
};