package sort

import "fmt"

func insertSort(nums []int) {
	for i := 1; i < len(nums); i++ {
		insertValue := nums[i]
		for j := i - 1; j >= 0; j-- {
			if nums[j] > insertValue {
				nums[j+1] = nums[j]
			} else {
				nums[j+1] = insertValue
				break
			}
			if j == 0 {
				nums[j] = insertValue
			}
		}
	}
}

func main() {
	nums := []int{49, 38, 65, 97, 76, 13, 27, 49}
	insertSort(nums)
	fmt.Println(nums)
}
