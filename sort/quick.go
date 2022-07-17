package sort

import "fmt"

func quickSortHelper(nums []int, start int, end int) {
	if start >= end {
		return
	}
	i := start
	j := end
	base := nums[end]
	for i < j {
		for i < j && nums[i] <= base {
			i++
		}
		nums[j] = nums[i]
		for i < j && nums[j] >= base {
			j--
		}
		nums[i] = nums[j]
	}
	nums[i] = base
	quickSortHelper(nums, start, i-1)
	quickSortHelper(nums, j+1, end)
}

func quickSort(nums []int) {
	quickSortHelper(nums, 0, len(nums)-1)
}

func main() {
	nums := []int{49, 38, 65, 97, 76, 13, 27, 49}
	quickSort(nums)
	fmt.Println(nums)
}
