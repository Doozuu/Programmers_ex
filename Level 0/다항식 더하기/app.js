function solution(polynomial) {
  let [x, c] = polynomial.split("+").reduce(
    ([a, b], s) => {
      if (s.includes("x")) {
        return [a + Number(s.trim().replace("x", "") || 1), b];
      }
      return [a, b + Number(s)];
    },
    [0, 0]
  );

  // x항과 상수항이 모두 없는 경우
  if (!x && !c) return "0";
  // 상수항만 있는 경우
  if (!x) return c.toString();

  x = `${x == 1 ? "" : x}x`;
  // x항만 있는 경우
  if (!c) return x;
  // x항과 상수항이 모두 있는 경우
  return `${x} + ${c}`;
}
