const arr = [4, 1, 3, 2, -1, -7, 9, 0]

const sort = arr => {
    return [...arr].sort((a, b) => a - b)
}

const quickSort = nums => {
    const sort = (nums, left, right) => {
        if(left >= right) {
            return
        }
        let base = nums[right]
        let i = left
        let j = right
        while(i < j) {
            while(i < j && nums[i] < base) {
                i++
            }
            nums[j] = nums[i]
            while(i < j && nums[j] > base) {
                j--
            }
            nums[i] = nums[j]
        }
        nums[j] = base
        sort(nums, left, i - 1)
        sort(nums, j + 1, right)
    }
    let sortedNums = [...nums]
    sort(sortedNums, 0, sortedNums.length - 1)
    return sortedNums
}

const bubbleSort = arr => {
    let sortedArr = [...arr]
    for(let i=0; i<sortedArr.length-1; i++) {
        for(let j=0; j<sortedArr.length-i-1; j++) {
            if(sortedArr[j+1] < sortedArr[j]) {
                let temp = sortedArr[j]
                sortedArr[j] = sortedArr[j+1]
                sortedArr[j+1] = temp
            }
        }
    }
    return sortedArr
}

const selectSort = arr => {
    let sortedArr = [...arr]
    for(let i=0; i<sortedArr.length; i++) {
        let min = sortedArr[i]
        let minIndex = i
        for(let j=i+1; j<sortedArr.length; j++) {
            if(sortedArr[j] < min) {
                min = sortedArr[j]
                minIndex = j
            }
        }
        let temp = sortedArr[minIndex]
        sortedArr[minIndex] = sortedArr[i]
        sortedArr[i] = temp
    }
    return sortedArr
}

const insertionSort = arr => {
    const sorted = arr.slice(0, 1)
    const unsorted = arr.slice(1)
    for(let i=0; i<unsorted.length; i++) {
        let cur = unsorted[i]
        let sortedLength = sorted.length
        for(let j=0; j<sortedLength; j++) {
            if(cur <= sorted[j]) {
                sorted.splice(j, 0, cur)
                break
            }
        }
        if(sortedLength === sorted.length) {
            sorted.push(cur)
        }
    }
    return sorted
}

console.log(sort(arr))
console.log(quickSort(arr))
console.log(bubbleSort(arr))
console.log(selectSort(arr))
console.log(insertionSort(arr))
