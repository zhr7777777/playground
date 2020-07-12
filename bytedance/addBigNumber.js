/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// leetcode 415题
var addStrings = function (num1, num2) {
  let a = num1
  let b = num2
  if (a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b
  } else {
    a = '0'.repeat(b.length - a.length) + a
  }
  let flag = 0
  let result = ''
  for (let i = 0; i < a.length; i++) {
    let sum = Number(a[a.length - 1 - i]) + Number(b[b.length - 1 - i]) + flag
    flag = sum >= 10 ? 1 : 0
    sum = sum % 10
    result = String(sum) + result
  }
  return flag === 1 ? '1' + result : result // 记得如果还有进位要加上
};