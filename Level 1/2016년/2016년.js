// 월별 일수를 더해 구하기
function solution(a, b) {
  let day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum_date = 0;
  for (let i = 0; i < a - 1; i++) {
    sum_date += date[i];
  }
  return day[(sum_date + b) % 7];
}

// Date를 이용한 방식
function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}
