function solution(babbling) {
  let list = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];
    for (let j = 0; j < list.length; j++) {
      if (babble.includes(list[j].repeat(2))) break;
      babble = babble.split(list[j]).join(" ");
    }
    if (babble.split(" ").join("").length === 0) answer++;
  }
  return answer;
}

// 정규 표현식 이용

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/; // 연속 확인
  const regexp2 = /^(aya|ye|woo|ma)+$/; // 포함 여부

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}
