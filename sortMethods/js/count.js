const countSort = nums => {
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  const count = new Array(max + 1).fill(0)
  const res = []
  for(let i = 0; i < nums.length; i++) {
    count[nums[i] - min]++
  }
  for(let i = 0; i < count.length; i++) {
    while(count[i]) {
      res.push(i + min)
      count[i]--
    }
  }
  return res
}


const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

const sortedNums = countSort(nums2)
console.log(sortedNums)