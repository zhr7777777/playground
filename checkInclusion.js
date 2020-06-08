/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // let record = new Set(s1.split('')) // 不能用set，set不会记录重复字符
    // for(let i=0; i<s2.length; i++) {
    //     if(record.has(s2[i])) {
    //         if(i+s1.length-1 < s2.length) {
    //             let j = 0
    //             for(; j<s1.length; j++) {
    //                 if(!record.has(s2[i+j])) {
    //                     break
    //                 } else {
    //                     record.delete(s2[i+j])
    //                 }
    //             }
    //             if(j === s1.length) {
    //                 return true
    //             } else {
    //                 record = new Set(s1.split(''))
    //             }
    //         }
    //     }
    // }
    // return false

    let record = {}
    for(let i=0; i<s1.length; i++) {
        if(record[s1[i]]) {
            record[s1[i]]++
        } else {
            record[s1[i]] = 1
        }
    }
    let cache = {...record}
    for(let i=0; i<s2.length; i++) {
        if(record[s2[i]]) {
            if(i+s1.length-1 < s2.length) {
                let j = 0
                for(; j<s1.length; j++) {
                    if(!record[s2[i+j]]) {
                        break
                    } else {
                        record[s2[i+j]]--
                        if(record[s2[i+j]] === 0) {
                            delete record[s2[i+j]]
                        }
                    }
                }
                if(j === s1.length) {
                    return true
                } else {
                    record = {...cache}
                }
            } else {
                return false
            }
        }
    }
    return false
};