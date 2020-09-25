/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.arr.push(num)
    for(let i=0; i<this.arr.length-1; i++) {
        if(this.arr[this.arr.length-1-i] < this.arr[this.arr.length-2-i]) {
            let temp = this.arr[this.arr.length-1-i]
            this.arr[this.arr.length-1-i] = this.arr[this.arr.length-2-i]
            this.arr[this.arr.length-2-i] = temp
        } else {
            break
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.arr.length === 0) return null
    if(this.arr.length === 1) return this.arr[0]
    return this.arr.length % 2 === 1 ? 
        this.arr[parseInt(this.arr.length / 2)] : 
        (this.arr[this.arr.length / 2 - 1] + this.arr[this.arr.length / 2]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */