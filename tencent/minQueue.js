class MinQueue {
    constructor() {
      this.queue = []
      this.minQueue = []
    }
  
    in(v) {
      this.queue.push(v)
      while(this.minQueue.length && this.minQueue[this.minQueue.length-1] > v) {
        this.minQueue.pop()
      }
      this.minQueue.push(v)
      console.log(this.minQueue)
    }
  
    out() {
      if(this.queue.length) {
        let first = this.queue.shift()
        if(first === this.minQueue[0]) {
          this.minQueue.shift()
        }
      }
    }
  
    getMin() {
      if(this.minQueue.length) return this.minQueue[0]
    }
  }
  
  const q = new MinQueue()
  q.in(-10)
  q.in(1)
  q.in(2)
  q.in(4)
  q.in(8)
  q.in(10)
  q.in(5)
  console.log(q.getMin()) // -10
  q.out()
  q.out()
  console.log(q.getMin()) // 2
  q.out()
  console.log(q.getMin()) // 4
  q.out()
  console.log(q.getMin()) // 5