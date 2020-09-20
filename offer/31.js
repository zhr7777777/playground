/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  if (pushed.length === 0) return true
  if (pushed.length === 1) return true
  let index = pushed.findIndex(num => num === popped[0])
  let popIndex = pushed.findIndex(num => num === popped[1])
  if (index + 1 < pushed.length && popIndex > index) {  // 下一个pop的元素可能是之后push的，下一个pop元素的index比当前元素的index大即可，而不是popped[1] === pushed[index+1]

  } else if (index - 1 >= 0 && popped[1] === pushed[index - 1]) { // 下一个pop的元素如果是已经push的，一定是pushed的最后一个元素

  } else {
    return false
  }
  pushed.splice(index, 1)
  popped.shift()
  return validateStackSequences(pushed, popped)
};