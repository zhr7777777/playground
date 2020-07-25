const findQueryValue = (url, key) => {
  key = String(key)
  if (!key) return ''
  let reg = new RegExp(`${key}=([^&]*)`)
  let match = url.match(reg)
  return match ? match[1] : ''
}

console.log(findQueryValue(window.location.href, ''))