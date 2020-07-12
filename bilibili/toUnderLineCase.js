var str = 'haoRan'
var toUnderlineCase = function (str) {
	var result = ''
	for(let i=0; i<str.length; i++) {
		// if(str.charAt(i) > 'A'  && str.charAt(i) < 'Z') {
		if(str.charAt(i) !== str.charAt(i).toLowerCase()) {
			result += '_'
			result += str.charAt(i).toLowerCase()
		} else {
			result += str.charAt(i)
		}
	}
	return result
}

toUnderlineCase(str)