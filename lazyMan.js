class LazyMan {
  constructor() {
    this.queue = []
    this.begin = true
  }

  next() {
    if(this.queue.length) {
      let first = this.queue.shift()
      first()
    }
  }

  sleepOnly(time) {
    this.queue.push(() => {
      // console.log('sleep ' + time)
      setTimeout(() => {
        this.next()
      }, time * 1000)
    })
    this.next()
  }

  sleep(time) {
    this.queue.push(() => {
      console.log('sleep ' + time)
      setTimeout(() => {
        this.next()
      }, time * 1000)
    })
    return this
  }

  eat(food) {
    this.queue.push(() => {
      console.log('eat ' + food)
      this.next()
    })
    this.next()
    return this
  }

}

let man = new LazyMan()

man.eat('apple').sleep(3).eat('pear').sleep(5)
// man.sleep(5).eat('apple')
// man.eat('apple')
// man.sleepOnly(5)
// man.eat('apple').sleep(3)