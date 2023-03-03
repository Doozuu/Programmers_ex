function solution(answers) {
  let fir = [1, 2, 3, 4, 5];
  let sec = [2, 1, 2, 3, 2, 4, 2, 5];
  let thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];
  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == fir[i % 5]) score[0]++;
    if (answers[i] == sec[i % 8]) score[1]++;
    if (answers[i] == thr[i % 10]) score[2]++;
  }
  score.map((n, i) => (n === Math.max(...score) ? answer.push(i + 1) : ""));
  return answer;
}
