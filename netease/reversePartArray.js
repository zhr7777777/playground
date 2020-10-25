const reversePartArray = (arr, start, end) => {
    for(let i=start; i<start + (end - start) / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[end-(i-start)]
        arr[end-(i-start)] = temp
    }
    return arr
}

console.log(reversePartArray([1, 2, 3, 4, 5, 6, 7], 3, 6))
console.log(reversePartArray([1, 2, 3, 4, 5, 6, 7], 1, 5))