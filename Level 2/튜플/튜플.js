function solution(s) {
  let answer = [];
  // 중괄호 없애고 이중 배열로 만들기
  let arr = s.slice(2, -2).split("},{");
  // 원소 길이 기준으로 오름차순 정렬
  arr.sort((a, b) => a.length - b.length);
  // 이미 있지 않은 값만 추가
  arr.map((el) =>
    el.map((n) => {
      if (!answer.includes(n)) answer.push(n);
    })
  );
  return answer.map((n) => +n); // 문자 -> 숫자로 바꾸기
}
