function solution(n, arr1, arr2) {
  let answer = [];
  let arr1_bin = arr1.map((n) => n.toString(2));
  let arr2_bin = arr2.map((n) => n.toString(2));

  for (let i = 0; i < n; i++) {
    if (arr1_bin[i].length < n)
      arr1_bin[i] = "0".repeat(n - arr1_bin[i].length) + arr1_bin[i];
    if (arr2_bin[i].length < n)
      arr2_bin[i] = "0".repeat(n - arr2_bin[i].length) + arr2_bin[i];
  }

  let arr1_ch = arr1_bin.map((n) =>
    [...n].map((v) => (v == 1 ? "#" : " ")).join("")
  );
  let arr2_ch = arr2_bin.map((n) =>
    [...n].map((v) => (v == 1 ? "#" : " ")).join("")
  );

  for (let i = 0; i < n; i++) {
    let p = "";
    for (let j = 0; j < n; j++) {
      if (arr1_ch[i][j] == " " && arr2_ch[i][j] == " ") p += " ";
      else p += "#";
    }
    answer.push(p);
  }
  return answer;
}
