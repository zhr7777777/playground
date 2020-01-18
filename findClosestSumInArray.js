// Find closest sum 54 in arr [10, 22, 28, 29, 30, 40], which are 22 and 30

var nums = [10, 22, 28, 29, 30, 40]

var findPair = function(arr, target) {
	if(arr.length < 2) {
		throw new Error('Invaild arr')
	}
	if(arr.length === 2) {
		return arr
	}
	let head = 0
	let tail = arr.length - 1
	let lessMax = arr[0] + arr[1]
	let greaterMin = arr[arr.length-2] + arr[arr.length-1]
	let lessMaxIdx = [0, 1]
	let greaterMinIdx = [arr.length-2, arr.length-1]
	while(tail > head) {
		sum = arr[head] + arr[tail]
		if(sum === target) {
			return [arr[head], arr[tail]]
		}
		if(sum > target) {
			if(sum < greaterMin) {
				greaterMin = sum
				greaterMinIdx[0] = head
				greaterMinIdx[1] = tail
			}
			tail--
		} else {
			if(sum > lessMax) {
				lessMax = sum
				lessMaxIdx[0] = head
				lessMaxIdx[1] = tail
			}
			head++
		}
	}
	return greaterMin - target > target - lessMax ? [arr[lessMaxIdx[0]], arr[lessMaxIdx[1]]] : [arr[greaterMinIdx[0]], arr[greaterMinIdx[1]]]
}

findPair(nums, 54)
findPair([1, 3, 4, 7, 10], 15)