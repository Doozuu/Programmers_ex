function solution(people, limit) {
  let boat = 0;
  let s = people.sort((a, b) => a - b);
  while (s.length !== 0) {
    if (s[0] + s[s.length - 1] <= limit) s.shift();
    s.pop();
    boat++;
  }
  return boat;
}

function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}
