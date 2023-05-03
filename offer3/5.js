/**
 * @param {string} s
 * @return {string}
 */

// var replaceSpace = function(s) {
//     return s.replace(/ /g, '%20')
// };

var replaceSpace = function(s) {
    let arr = []
    for(let i=0; i<s.length; i++) {
        if(s[i] === ' ') {
            arr.push('%20')
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('')
};

var replaceSpace = function(s) {
    return s.split(" ").join("%20");
};