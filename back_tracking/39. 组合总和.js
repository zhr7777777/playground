/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []

  const dfs = (start, temp, sum) => {
    if(sum > target) {
      return
    }
    if(sum === target) {
      res.push([...temp])
      return
    }
    for(let i=start; i<candidates.length; i++) {
      temp.push(candidates[i])
      dfs(i, temp, sum + candidates[i])
      temp.pop()
    }
  }
  dfs(0, [], 0)
  return res
};

console.log(combinationSum([2, 3, 5, 7, 9, 11], 23))
