function solution(keyinput, board) {
  let answer = [0, 0];
  // 최대 이동 범위 구하기
  let max_x = (board[0] - 1) / 2;
  let max_y = (board[1] - 1) / 2;
  // 방향키에 따라 좌표 이동하기 & 최대 범위 넘으면 값 조절하기
  for (i = 0; i < keyinput.length; i++) {
    if (keyinput[i] == "left") {
      answer[0] -= 1;
      if (Math.abs(answer[0]) > max_x) answer[0] += 1;
    } else if (keyinput[i] == "right") {
      answer[0] += 1;
      if (Math.abs(answer[0]) > max_x) answer[0] -= 1;
    } else if (keyinput[i] == "down") {
      answer[1] -= 1;
      if (Math.abs(answer[1]) > max_y) answer[1] += 1;
    } else if (keyinput[i] == "up") {
      answer[1] += 1;
      if (Math.abs(answer[1]) > max_y) answer[1] -= 1;
    }
  }
  return answer;
}
