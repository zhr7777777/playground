// const EventEmitter = require('events')

// const myEmitter = new EventEmitter()

// myEmitter.on('test', () => {
//     console.log('test')
// })

// myEmitter.emit('test')

// var str = 'xxxiiiooonnnggg'
// var reg = /(.)\1+/g

// str = str.replace(reg, "$1")
// console.log(str)

// let regExec = /\${([^}]*)}/g

// let str = '${a}-${b}+3'

// console.log(str.match(regExec))

// var simplifyPath = function(path) {
//     if(!path.length) return ''
//     let pattern = /\.\.\//g
//     let reg = /\/([^\/\.]+)\//g
//     let arr = []
//     let arrPath = []
//     while(true) {
//         let matchPath = reg.exec(path)
//         if(!matchPath) break
//         arrPath.push({
//             path: matchPath[1],
//             index: matchPath.index
//         })
//     }
//     while(true) {
//         let match = pattern.exec(path)
//         if(!match) break
//         arr.push({
//             path: match[0],
//             index: match.index
//         })
//     }
//     for(let i=0; i<arr.length; i++) {
//         console.log(arrPath)
//         console.log(arr)
//         if(!arrPath.length) {
//             return '/'
//         }
//         if(arr[i].index >= arrPath[0].index) {
//             arrPath.shift()
//         }
//     }
//     return '/' + arrPath.map(e => e.path).join('/')
// };

// var test = "/a/../../b/../c//.//"

// console.log(simplifyPath(test))

// const arr = [1]
// console.log(arr instanceof Array)
// console.log(arr.constructor === Array)

// function test() {
//     this.name = 'aa'
// }

// console.log(test.prototype)

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function(x) {  // 使用二分查找
//     if(x < 2) return x
//     let left = 1
//     let right = parseInt(x / 2)
//     while(left <= right) {
//         let mid = left + parseInt((right - left) / 2)
//         let mul = mid * mid
//         if(mul === x) return mid
//         if(mul < x) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return right
// };

// const mySqrt = num => {
//     if(num < 2) return num
//     let start = 1
//     let end = parseInt(num / 2) // 5
//     while(end >= start) {
//         let mid = start + parseInt((end - start) / 2) // 3
//         let mul = mid * mid
//         if(mul === num) return mid
//         if(mul > num) {
//             end = mid - 1 // 3
//         } else {
//             start = mid + 1 //
//         }
//     }
//     return end
// }

// console.log(mySqrt(10))

// let a = {}
// console.log(a.toString())

const fn1 = source => {
    console.log('fn1 executed')
    source++
    return source
}

const fn2 = source => {
    console.log('fn2 executed')
    source++
    return source
}

const fn3 = source => {
    console.log('fn3 executed')
    source++
    console.log(source)
    return source
}

const fns = [fn1, fn2, fn3]

const compose = (i, src) => {
    // console.log(i)
    if(i === fns.length - 1) {
        return fns[i](src)
    }
    const result = compose(i+1, src)
    return fns[i](result)
}

console.log(compose(0, 7))


