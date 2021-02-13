const radixSort = nums => {
    let counter = new Array(10)
    let mod = 10
    let place = 1
    let length = String(nums[0]).length
    for(let i=0; i<length; i++, place *= 10, mod *= 10) {
        for(let j=0; j<nums.length; j++) {
            let b = parseInt((nums[j] / place)) % mod
            if(counter[b]) counter[b].push(nums[j])
            else counter[b] = [nums[j]]
        }
        for(let j=0, k=0; j<counter.length; j++) {
            if(counter[j] && counter[j].length) {
                while(counter[j].length) {
                    nums[k] = counter[j].shift()
                    k++
                }
            }
        }
    }
}

const nums1 = [4, 1, 3, 2, -1, -7, 9, 0]
const nums2 = [49, 38, 65, 97, 76, 13, 27, 49]
const nums3 = [4, 3, 2, 1]
const nums4 = [1, 4, 2, 1, -1, 5, 7]

radixSort(nums2)
console.log(nums2)

