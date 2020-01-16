function Node(val) {
	this.val = val
	this.left = this.right = null
}

var root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

function *createIterator(root) {
	var cur = root
	var stack = []
	while(cur || stack.length) {
		if(cur) {
			stack.push(cur)
			cur = cur.left
		} else {
			let top = stack.pop()
			cur = top.right
			yield top.val
		}
	}
}

// var createIterator = function (root) {
// 	var cur = root
// 	var stack = []
// 	return {
// 		next() {
// 			var done = true
// 			var value
// 			while(cur || stack.length) {
// 				done = false
// 				if(cur) {
// 					stack.push(cur)
// 					cur = cur.left
// 				} else {
// 					let top = stack.pop()
// 					cur = top.right
// 					value = top.val
// 					break
// 				}
// 			}
// 			return {
// 				value,
// 				done
// 			}
// 		}
// 	}
// }

var i = createIterator(root)

console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())