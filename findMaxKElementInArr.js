// n个元素数组取k个最大值


let findMaxArr = function(arr, k) {
	for(let i=0; i<k; i++) {
		for(let j=0; j<arr.length-1-i; j++) {
			if(arr[j] > arr[j+1]) {
				let temp = arr[j+1]
				arr[j+1] = arr[j]
				arr[j] = temp
			}
		}
	}
	return arr.slice(-k)
}

findMaxArr([8,3,5,7,1,3,0,10,-1,100,4], 6)