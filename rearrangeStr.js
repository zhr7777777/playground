// “abc def ghi”=》"adg beh cfi"
// “a def ghi”=》"adg eh fi"

// const rearrangeStr = str => {
//     const result = []
//     let arr = str.split(' ')
//     let maxLength = 0
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i].length > maxLength) {
//             maxLength = arr[i].length
//         }
//     }
//     // console.log(maxLength)
//     for(let j =0; j<maxLength; j++) {
//         let str = ''
//         for(let i=0; i<arr.length; i++) {
//             if(j < arr[i].length) {
//                 str = str + arr[i][j]
//             }
//         }
//         result.push(str)
//     }
//     return result.join(' ')
// }

const rearrangeStr = str => {
    const result = ['']
    let index = 0
    for(let i=0; i<str.length; i++) {
        if(str[i] === ' ') {
            index = 0
            continue
        }
        if(index >= result.length) {
            result.push('')
        }
        result[index] = result[index] + str[i]
        index++
    }
    return result.join(' ')
}

console.log(rearrangeStr("abc def ghi"))
console.log(rearrangeStr("a def ghi"))