function solution(dartResult) {
  let answer = [];
  let arr = dartResult.split(10).join("t").split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "t") arr[i] = "10";
    if (arr[i] === "S") answer.push(arr[i - 1] ** 1);
    if (arr[i] === "D") answer.push(arr[i - 1] ** 2);
    if (arr[i] === "T") answer.push(arr[i - 1] ** 3);
    if (arr[i] === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
    if (arr[i] === "#") answer.push(answer.pop() * -1);
  }
  return answer.reduce((acc, cur) => acc + cur);
}

// 정규표현식을 이용한 풀이
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
