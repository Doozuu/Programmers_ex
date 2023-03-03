// 내가 생각한 풀이
function solution(n) {
  let arr = [];
  for (i = 1; i <= 185; i++) {
    arr.push(i);
  }
  return arr
    .filter((n) => n % 3 !== 0)
    .map((n) => String(n))
    .filter((n) => !n.includes("3"))
    .map((n) => Number(n))[n - 1];
}

// 더 좋은 풀이!
function solution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num)
    if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num);
  return arr.pop();
}
