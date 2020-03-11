function presses(phrase) {
  map = [
    ["1"],
    ["A","B","C", "2"],
    ["D","E","F", "3"],
    ["G","H","I", "4"],
    ["J","K","L", "5"],
    ["M","N","O", "6"],
    ["P","Q","R","S", "7"],
    ["T","U","V", "8"],
    ["W","X","Y","Z", "9"],
    [" ", "0"]
  ];
  var res = 0;
  phrase.toUpperCase().split("").forEach((a) => {
    if (/[A-Z0-9 ]/.test(a)) {
      map.forEach(i => (res += i.indexOf(a) + 1));
    }
  });
  return res;
}
