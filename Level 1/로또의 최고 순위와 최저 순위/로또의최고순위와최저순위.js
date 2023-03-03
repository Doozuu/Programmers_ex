function solution(lottos, win_nums) {
  let correct = 0;
  let zero = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.indexOf(lottos[i]) >= 0) correct++;
    if (lottos[i] == 0) zero++;
  }
  function Rank(n) {
    return 7 - n > 6 ? 6 : 7 - n;
  }
  return [Rank(correct + zero), Rank(correct)];
}

// 다른 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
