const straightInsertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    let insertValue = nums[i]  // 从第二个元素开始
    for (let j = i; j >= 0; j--) {  // 找插入的位置，就是j
      if (j - 1 < 0) { // 考虑j-1溢出数组时
        nums[j] = insertValue
      } else {
        if (nums[j - 1] > insertValue) { // 考虑j-1是不是待插入的位置
          nums[j] = nums[j - 1] // 把比insertValue大的元素后移
        } else {
          nums[j] = insertValue
          break
        }
      }
    }
  }
  return nums
}

const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

straightInsertionSort(nums3)
console.log(nums3)

