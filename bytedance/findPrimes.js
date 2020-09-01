/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primes = []
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) primes.push(i)
  }
  return primes
};

var isPrime = function (n) {
  if (n < 2) return false
  for (let i = 2; i * i <= n; i++) {  // 优化点：计算复杂度降为O(n1.5)
    if (n % i === 0) return false
  }
  return true
}

console.log(countPrimes(100))

var countPrimes = function (n) {
  let isPrime = new Array(n)
  let primes = []
  for(let i=2; i<n; i++) isPrime[i] = true
  for(let i=2; i*i<n; i++) {
    if(!isPrime[i]) continue
    for(let j=i*i; j<n; j=j+i) {
      isPrime[j] = false
    }
  }
  for(let i=2; i<isPrime.length; i++) {
    if(isPrime[i]) primes.push(i)
  }
  return primes
}

console.log(countPrimes(100))