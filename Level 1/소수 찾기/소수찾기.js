// naive한 방식
function solution(n) {
  let answer = n - 1;

  for (let i = 2; i <= n; i++) {
    let num = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) num++;
      if (num > 1) {
        answer--;
        break;
      }
    }
  }
  return answer;
}

// 에라토스테네스의 체 알고리즘과 약수의 대칭성을 이용한 알고리즘 개선
function solution(n) {
  let arr = Array.from({ length: n + 1 }).fill("true");
  arr[0] = arr[1] = "false";
  let sqrt = parseInt(Math.sqrt(n));

  for (let i = 2; i <= sqrt; i++) {
    if (arr[i] == "true") {
      for (let j = 2; i * j <= n; j++) {
        arr[i * j] = "false";
      }
    }
  }
  return arr.filter((el) => el == "true").length;
}
