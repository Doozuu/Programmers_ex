// 재귀 이용한 풀이
function jumpCase(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;
  return jumpCase(num - 1) + jumpCase(num - 2);
}
// dp 이용한 풀이
function solution(n) {
  var answer = 0;
  var dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 2] % 1234567);
  }
  answer = dp[n];
  return answer % 1234567;
}
