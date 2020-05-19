// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
// bilibili

// 没考虑负数和0
// var reverseInt = function (num) {
// 	if(num === 0) {
// 		return ''
// 	}
// 	var remainder = num % 10
// 	var quotient = parseInt(num / 10)
// 	return String(remainder) + reverseInt(quotient)
// }

const reverseInt = function (num) {
	if(num === 0) {
		return '0'
	}
	let temp = Math.abs(num)
	const reverse = num => {
		if(num === 0) return ''
		let remaider = num % 10
		let quotient = parseInt(num / 10)
		return String(remaider) + reverse(quotient)
	}
	const result = reverse(temp)
	return num < 0 ? `-${result}` : result
}

console.log(reverseInt(1234))
console.log(reverseInt(-1234))
console.log(reverseInt(0))