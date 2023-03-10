// new Date로 연,월,일 구해서 비교하기
function solution(today, terms, privacies) {
  let answer = [];
  let obj = {}; // 약관종류 & 유효기간
  let month = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  let [ty, tm, td] = today.split("."); // 현재 날짜
  terms.map((n) => (obj[n.split(" ")[0]] = Number(n.split(" ")[1])));

  for (let i = 0; i < privacies.length; i++) {
    let s = privacies[i].split(" ");
    let [y, m, d] = s[0].split(".");
    let date = new Date(y, m - 1, d);
    let new_date = new Date(date.setMonth(date.getMonth() + obj[s[1]]));
    let after = new_date.toString().slice(4, 15); // 더한 후 날짜
    let yy = after.slice(7, 15); // 연
    let mm = month[after.slice(0, 3)]; // 월
    let dd = after.slice(4, 6); // 일
    if (
      ty > yy ||
      (ty == yy && tm > mm) ||
      (ty == yy && tm == mm && td > dd - 1)
    ) {
      answer.push(i + 1);
    }
  }
  return answer;
}

// 일수로 바꾸고 총합 비교하기
function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}
