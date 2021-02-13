const merge = (left, right) => {
  const res = new Array(left.length + right.length)
  let i = 0
  let j = 0
  let k = 0
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      res[k] = left[i]
      i++
    } else {
      res[k] = right[j]
      j++
    }
    k++
  }
  while (i < left.length) {
    res[k] = left[i]
    i++
    k++
  }
  while (j < right.length) {
    res[k] = right[j]
    j++
    k++
  }
  return res
}

const mergeSort = nums => {
  if(nums.length <= 1) return nums
  let midIndex = Math.floor((nums.length) / 2)
  return merge(mergeSort(nums.slice(0, midIndex)), mergeSort(nums.slice(midIndex)))
}

const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

const sortedNums = mergeSort(nums2)
console.log(sortedNums)

