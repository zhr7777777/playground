const swap1 = (a, b) => {
  [b, a] = [a, b]
  console.log(a)
  console.log(b)
}

const swap2 = (a, b) => {
  a = a + b
  b = a - b
  a = a - b
  console.log(a)
  console.log(b)
}

const swap3 = (a, b) => {
  a = a ^ b
  b = a ^ b
  a = a ^ b
  console.log(a)
  console.log(b)
}

console.log(swap3(1, 2))