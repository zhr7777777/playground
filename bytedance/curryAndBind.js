function bind(context, fn) {
	return function () {
		var re = fn.apply(context, arguments)
		return re
	}
}

// 函数柯里化，返回一个已经设置部分参数的函数（原函数有n个参数，生成一个n-m个参数的函数）
function curry(fn) {
	var args = Array.from(arguments).slice(1)	// 取出传入curry的参数，先把类数组arguments转化成数组
	return function () {	// 返回柯里化之后的函数
		var re = fn.apply(null, args.concat(Array.from(arguments))) // 之前的参数和传入柯里化之后函数的参数合并
		return re
	}
}

var add = function (a, b) {
	return a + b
}

curriedAdd = curry(add, 2)

console.log(curriedAdd(3))