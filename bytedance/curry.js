const curry = (fn) => {
    const curried = (...args) => {
        if(args.length >= fn.length) {
            return fn(...args)
        } else {
            return (...args1) => {
                return curried(...args.concat(args1))
            }
        }
    }
    return curried
}

const add = (a, b, c) => {
    return a + b + c
}

const curriedAdd = curry(add)

console.log(curriedAdd(1, 2)(3))
console.log(curriedAdd(1)(2)(3))