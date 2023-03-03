// 방식 1 : object 이용하기
function solution(strings, n) {
  let answer = [];
  let s = strings.sort(); // 미리 정렬
  let obj = new Object();
  s.map((val) => (obj[val] = val[n])); // key, value 설정
  let sorted = Object.entries(obj).sort(([, a], [, b]) => (a < b ? -1 : 1));
  for (let element of sorted) {
    answer.push(element[0]);
  }
  return answer;
}

// 방식 2 : localeCompare 메서드활용
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// 방식 3 : sort 활용
function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
}

// 창의적인 방법 :
function solution(strings, n) {
  var answer = [];
  for (var i = 0; i < strings.length; i++) {
    var chu = strings[i][n];
    strings[i] = chu + strings[i];
  }
  strings.sort();
  for (var j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    answer.push(strings[j]);
  }

  return answer;
}
