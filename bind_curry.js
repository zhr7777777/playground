function bind(fn, context) {
	return function () {
		return fn.apply(context, arguments)
	}
}

function curry(fn) {
	var args = Array.from(arguments).slice(1)
	return function () {
		return fn.apply(null, args.concat(Array.from(arguments)))
	}
}

var add = function (a, b) {
	return a + b
}

curriedAdd = curry(add, 2)

curriedAdd(3)