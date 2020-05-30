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

let regExec = /\${([^}]*)}/g

let str = '${a}-${b}+3'

console.log(str.match(regExec))