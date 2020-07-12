const collection = {
    items: [],
    [Symbol.iterator]: function *() {
        // this.items.forEach(item => {
        //     yield item
        // })
        for(let i=0; i<this.items.length; i++) {
            yield this.items[i]
        }
    }
}

collection.items.push(1)
collection.items.push(2)

for(let x of collection) {
    console.log(x)
}