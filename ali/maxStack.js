// 3 2 1 3 4
class MaxStack {
    constructor() {
        this.stack = []
        this.maxStack = []
    }

    push(v) {
        this.stack.push(v)
        if(this.maxStack.length === 0 || v >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(v)
        }
    }

    pop() {
        const top = this.stack.pop()
        if(top === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop()
        }
        return top
    }

    getMax() {
        if(this.maxStack.length === 0) return
        console.log(this.maxStack[this.maxStack.length - 1])
        return this.maxStack[this.maxStack.length - 1]
    }
}

const maxStack = new MaxStack();
maxStack.push(3);
maxStack.push(2);
maxStack.push(1);
maxStack.push(3);
maxStack.push(4);
maxStack.getMax();  // 4
maxStack.pop();
maxStack.pop();
maxStack.getMax();  // 3
maxStack.pop();
maxStack.getMax();  // 3