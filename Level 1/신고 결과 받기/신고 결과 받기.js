// object 방식
function solution(id_list, report, k) {
  let obj = {};
  let warning = {};
  id_list.map((n) => (obj[n] = []));
  report.map((n) => {
    let s = n.split(" ");
    if (!obj[s[0]].includes(s[1])) obj[s[0]].push(s[1]);
  });
  let warn_list = Object.values(obj);
  warn_list.map((n) => n.map((el) => (warning[el] = (warning[el] || 0) + 1)));
  return warn_list.map(
    (n) => n.map((el) => (el = warning[el])).filter((el) => el >= k).length
  );
}

// Map, Set
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
