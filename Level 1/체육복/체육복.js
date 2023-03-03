function solution(n, lost, reserve) {
  let answer = 0;
  let count = new Array(lost.length).fill(0);
  let lost_sort = lost.sort((a, b) => a - b);
  let reserve_sort = reserve.sort((a, b) => a - b);

  lost_sort.map((n, i) => reserve_sort.map((v) => (v == n ? count[i]++ : "")));
  let fil = reserve_sort.filter((n, i) => !lost_sort.includes(n));
  lost_sort.map((n, i) =>
    fil.map((v) => (n - 1 == v || n + 1 == v ? count[i]++ : ""))
  );
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) answer++;
    if (
      lost_sort[i] + 2 == lost_sort[i + 1] &&
      count[i] == 1 &&
      count[i + 1] == 1 &&
      fil.indexOf((lost_sort[i] + lost_sort[i + 1]) / 2) > -1
    )
      answer--;
  }
  return n - lost.length + answer;
}
