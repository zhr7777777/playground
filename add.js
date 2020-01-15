// 实现一个add方法，使计算结果能够满足如下预期：
var add = function () {
	var args = []
	var adder = function () {
		args = args.concat(Array.from(arguments))
		return adder	// return itself to make add call multiple times
	}
	adder.toString = function () {
		return args.reduce((pre, cur) => pre + cur, 0)
	}
	return adder.apply(null, Array.from(arguments)) // pass cur arguments
}



console.log(add(1)(2)(3)) // 6
console.log(add(1, 2, 3)(4)) // 10
console.log(add(1)(2)(3)(4)(5)) // 15

