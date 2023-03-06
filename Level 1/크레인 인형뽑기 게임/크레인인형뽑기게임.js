function solution(board, moves) {
  let answer = 0;
  let arr = Array.from(Array(board.length), () => new Array(0));
  let bucket = [];
  for (let i = 0; i < board[0].length; i++) {
    for (let j = board.length - 1; j >= 0; j--) {
      if (board[j][i] !== 0) arr[i].push(board[j][i]);
    }
  }
  for (let i = 0; i < moves.length; i++) {
    let cur = moves[i] - 1;
    if (arr[cur].length !== 0) {
      if (bucket[bucket.length - 1] == arr[cur][arr[cur].length - 1]) {
        arr[cur].pop();
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(arr[cur].pop());
      }
    }
  }
  return answer;
}

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
