/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {}
  let max = 0
  let curMax = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      max = Math.max(max, curMax)
      i = map[s[i]]
      map = {}
      curMax = 0
    } else {
      map[s[i]] = i
      curMax++
    }
  }
  return Math.max(max, curMax)
};