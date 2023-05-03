/**
 * @param {number[]} numbers
 * @return {number}
 */
// var minArray = function(numbers) {
//     let start = 0
//     let end = numbers.length - 1
//     while(end > start) {
//         if(numbers[start+1] < numbers[start]) {
//             return numbers[start+1]
//         }
//         if(numbers[end-1] > numbers[end]) {
//             return numbers[end]
//         }
//         start++
//         end--
//     }
//     return numbers[0] // 这里要返回第一个元素，比如未旋转
// };

var minArray = function(numbers) {
    let i = 0
    let j = numbers.length - 1
    while(j > i) {
        let mid = parseInt(i+(j-i)/2)
        if(numbers[mid] > numbers[j]) {
            i = mid + 1
        } else if(numbers[mid] < numbers[j]) {
            j = mid
        } else {
            j--
        }
    }
    return numbers[i]
};