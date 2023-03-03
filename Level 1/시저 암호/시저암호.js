// 아스키 코드와 정규 표현식을 이용한 방식
function solution(s, n) {
  return s
    .split("")
    .map((val) =>
      (val.match(/^[a-z]/g) && val.charCodeAt() + n > 122) ||
      (val.match(/^[A-Z]/g) && val.charCodeAt() + n > 90)
        ? String.fromCharCode(val.charCodeAt() + n - 26)
        : val.match(/\s/g)
        ? " "
        : String.fromCharCode(val.charCodeAt() + n)
    )
    .join("");
}

// 아스키 코드 & 정규 표현식 없이 푸는 방법
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
