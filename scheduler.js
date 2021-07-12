// JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出

// class Scheduler {
//   // add<T>(promiseCreator: () => Promise<T>): Promise<T> { ... }
//   add(promiseCreator) { ... }
//   // ...
// }

// const timeout = (time) => new Promise(resolve => {
//   setTimeout(resolve, time)
// })

// const scheduler = new Scheduler()
// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time))
//     .then(() => console.log(order))
// }


class Scheduler {
    constructor() {
       this.runing = []
       this.pending = []
    }
    
    add(fn) {
        if(this.runing.length >= 2) {
            return new Promise((resolve) => {
                this.pending.push(() => fn().then(resolve))    
            })
        } else {
            this.runing.push(fn) 
            return fn().then(() => {
                this.runing.shift()
                if(this.pending.length) {
                    let first = this.pending.shift()
                    this.add(first)                   
                }
            })
        }
    }
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4