/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]] = map[s[i]] + 1
    } else {
      map[s[i]] = 1
    }
  }
  for (let char in map) {
    if (map[char] === 1) return char
  }
  return ' '
};