// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1) 。若队列为空，pop_front 和 max_value 需要返回 -1

// 输入:
// ["MaxQueue", "push_back", "push_back", "max_value", "pop_front", "max_value"]
// [[], [1], [2], [], [], []]
// 输出: [null, null, null, 2, 1, 2]

class CQueue {
  constructor(queue, compare) {
    this.queue = []
    this.compare = compare || ((a, b) => a - b)
    this.maxQueue = []
    if(queue) {
      queue.forEach(e => {
        this.give(e)
      })
    }
  }

  // max_value
  take() {
    if(this.queue.length === 0) return null
    return this.maxQueue[0]
  }

  // push_back
  give(value) {
    this.queue.push(value)
    if(this.maxQueue.length === 0) {
      this.maxQueue.push(value)
    } else {
      while (this.maxQueue.length > 0 && value > this.maxQueue[this.maxQueue.length-1]) {
        this.maxQueue.pop()
      }
      this.maxQueue.push(value)
    }
  }
}

const q = new CQueue([7, 3, 9, 6, 5, 4, 8, 0, 2])
console.log(q.maxQueue)
console.log(q.take())