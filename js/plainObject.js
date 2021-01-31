const plainObjectString = Object.toString()

function isObject(value) {
  return value !== null && typeof value === "object"
}

function isPlainObject(value) {
  if (!isObject(value)) return false
  const proto = Object.getPrototypeOf(value)
  if (proto == null) return true
  return proto === Object.prototype
}