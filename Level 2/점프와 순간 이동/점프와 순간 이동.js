// greedy algorithm
function solution(n) {
  let battery = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      battery++;
    }
  }
  return battery;
}

// 이진수 활용 풀이
function solution(n) {
  return n.toString(2).match(/1/g).length;
}
