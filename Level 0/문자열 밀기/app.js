function solution(A, B) {
  let a = A.split("");
  // 처음부터 같은 경우
  if (A == B) return 0;
  // 같지 않은 경우 같아질 때까지 미는 과정 반복. 같아지면 실행 횟수 return.
  for (i = 0; i <= a.length; i++) {
    if (a.join("") !== B) {
      a.unshift(a.pop());
    } else {
      return i;
    }
  }
  // 밀어도 같아지지 않는 경우
  return -1;
}

// 신박한 풀이
function solution(A, B) {
  return (B + B).indexOf(A);
}
