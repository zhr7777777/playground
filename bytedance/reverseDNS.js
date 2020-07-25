// www.zhr.com => com.zhr.www

const reverseDNS = dns => {
  let result = ''
  let cur = ''
  for(let i=0; i<dns.length; i++) {
    if(dns[i] === '.') {
      result += cur
      result += '.'
      cur = ''
      continue
    }
    cur = dns[dns.length-1-i] + cur
  }
  return cur ? result + cur : result
}

console.log(reverseDNS('www.zhr.com'))