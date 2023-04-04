function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
    for (let j = 0; j < arr2[0].length; j++) {
      let n = 0;
      for (let k = 0; k < arr1[i].length; k++) {
        n += arr1[i][k] * arr2[k][j];
      }
      answer[i].push(n);
    }
  }
  return answer;
}
// map, reduce 활용
function productMatrix(A, B) {
  return A.map(function (row) {
    return row.map(function (_, i) {
      return row.reduce(function (sum, cell, j) {
        return sum + cell * B[j][i];
      }, 0);
    });
  });
}
