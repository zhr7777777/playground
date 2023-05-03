/**
 * @param {number} n
 * @return {number[]}
 */
//  var printNumbers = function(n) {
//     let end = Math.pow(10, n)
//     const res = new Array(end-1)
//     for(let i=0; i<end-1; i++) {
//         res[i] = i + 1
//     }
//     return res
// };

// 需要考虑大数
 var printNumbers = function(n) {
    const res = [];
    const dfs = (solution, len) => {
      if (solution.length === len) {
        res.push(Number(solution.join("")));
        return;
      }
      let start = solution.length === 0 ? 1 : 0;
      for (let i = start; i < 10; i++) {
        solution.push(i);
        dfs(solution, len);
        solution.pop();
      }
    };
    for (let i = 1; i <= n; i++) {
      dfs([], i);
    }
    return res;
  };

