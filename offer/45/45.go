package offer

import (
	"fmt"
	"sort"
	"strings"
)

func minNumber(nums []int) string {
	sort.Slice(nums, func(i, j int) bool {
		x := fmt.Sprintf("%d%d", nums[i], nums[j])
		y := fmt.Sprintf("%d%d", nums[j], nums[i])
		return x < y
	})

	var b strings.Builder
	for i := 0; i < len(nums); i++ {
		// b.WriteString(strconv.Itoa(nums[i]))
		b.WriteString(fmt.Sprintf("%d", nums[i]))
	}
	return b.String()

	// res := ""
	// for i:=0; i<len(nums); i++ {
	//     res += fmt.Sprintf("%d", nums[i])
	// }
	// return res
}
