function solution(board) {
  let count = 0;
  let range = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        range.forEach((item) => {
          let [nextX, nextY] = item;
          [nextX, nextY] = [i + nextX, j + nextY];
          if (
            nextX >= 0 &&
            nextX < board.length &&
            nextY >= 0 &&
            nextY < board[i].length &&
            board[nextX][nextY] === 0
          ) {
            board[nextX][nextY] = 2;
          }
        });
      }
    }
  }
  board.forEach((a) => a.forEach((b) => (b === 0 ? count++ : 0)));
  return count;
}
