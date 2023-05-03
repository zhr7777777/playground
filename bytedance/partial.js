// 方法一

const myBind = function(ctx, ...args) {
    const self = this
	return function(...args1) {
		return self.apply(ctx, args.concat(args1))
	}
}

Function.prototype.bind = myBind

function add(a, b, c) {
    return a + b + c
}

const addPartial = add.bind(add, 1, 2)

console.log(addPartial(3))

// 方法二
// const partial = (fn, ...args) => {
//     return (...args1) => {
//         return fn(...args.concat(args1))
//     }
// }

// const add = (a, b, c) => {
//     return a + b + c
// }

// const addPartial = partial(add, 1, 2)

// console.log(addPartial(3))