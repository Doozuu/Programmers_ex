// 풀이 1
function solution(score) {
  let average = score.map(([e, m]) => (e + m) / 2);
  let rank = Array(average.length).fill(1);
  for (i = 0; i < average.length; i++) {
    for (j = 0; j < average.length; j++) {
      if (average[i] < average[j]) rank[i]++;
    }
  }
  return rank;
}

// 풀이 2
function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}

// 풀이 3
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
