// thunk
class TrafficLights {
  constructor() {
    this.queue = []
  }

  next() {
    let first = this.queue.shift()
    first()
  }

  firelight(light, time) {
    this.queue.push(() => {
      console.log(light)
      setTimeout(() => {
        this.next()
        this.firelight(light, time) // 循环调用
      }, time * 1000)
    })
  }

  start() {
    this.firelight('red', 3)
    this.firelight('yellow', 1)
    this.firelight('green', 1)
    this.next()
  }
}
const tl = new TrafficLights()
tl.start()

// // promise
// const sleep = duration => new Promise(reslove => setTimeout(reslove, duration))
// const start = async () => {
//   while (true) {
//     console.log('red')
//     await sleep(3000)
//     console.log('yellow')
//     await sleep(1000)
//     console.log('green')
//     await sleep(1000)
//   }
// }

// // 阻塞线程
// const sleep = duration => {
//   let now = Date.now()
//   while(true) {
//     if (Date.now() - now > duration) break
//   }
// }

// const start = () => {
//   while (true) {
//     console.log('red')
//     sleep(3000)
//     console.log('yellow')
//     sleep(1000)
//     console.log('green')
//     sleep(1000)
//   }
// }

// start()