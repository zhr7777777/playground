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