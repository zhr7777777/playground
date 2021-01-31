// 2, 1, 3, 4
class MinStack {
	constructor() {
    	this.stack = []
        this.minStack = []
    }
  
  	push(v) {
    	this.stack.push(v)
        if(this.minStack.length) {
            if(v <= this.minStack[this.minStack.length-1]) {
                this.minStack.push(v)
            }
        } else {
        	this.minStack.push(v)
        }
    }
  
  	pop() {
    	let top = this.stack.pop()
        if(this.minStack[this.minStack.length - 1] === top) {
        	this.minStack.pop()
        }
        return top
    }

  	getMin() { 
          console.log(this.minStack[this.minStack.length - 1])
    	return this.minStack[this.minStack.length - 1]
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.pop();
minStack.getMin();