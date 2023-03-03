// 효율성에서 틀린 풀이
function solution(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
    if (completion.indexOf(participant[i]) >= 0) {
      completion.splice(completion.indexOf(participant[i]), 1);
      participant[i] = "true";
    }
  }
  return participant.filter((el) => el !== "true").join("");
}

// 효율성 개선된 풀이
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 해시를 이용한 풀이
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    map.set(participant[i], (map.get(participant[i]) || 0) + 1);
    map.set(completion[i], (map.get(completion[i]) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}
