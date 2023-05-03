/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function(matrix, target) {
//     let res = false
//     for(let i=0; i<matrix.length; i++) {
//         if(matrix[i][0] > target) {
//             return false
//         }
//         for(let j=0; j<matrix[i].length; j++) {
//             if(matrix[i][j] === target) {
//                 return true
//             }
//             if(matrix[i][j] > target) {
//                 break
//             }
//         }
//     }
//     return res
// };

var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0) {
        return false
    }
    let i = 0
    let j = matrix[0].length - 1
    while (i < matrix.length && j >= 0) {
        let cur = matrix[i][j]
        if (cur === target) {
            return true
        } else if (cur > target) {
            j--
        } else {
            i++
        }
    }
    return false
};
