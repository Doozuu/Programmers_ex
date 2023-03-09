// 시간 초과
function solution(ingredient) {
  let answer = 0;
  let str = ingredient.join("");
  while (str.indexOf("1231") > -1) {
    answer++;
    str = str.replace("1231", "");
  }
  return answer;
}

// 스택을 이용한 풀이
function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let n of ingredient) {
    stack.push(n);

    if (stack.slice(-4).join("") == "1231") {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}

// 신박한 풀이
function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}
