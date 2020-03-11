function expandedForm(num) {
  var r = [];
  var z = "";
  num.toString()
    .split("")
    .reverse()
    .map((x, i) => {
      if (x != "0") {
        r.push(x + z);
      }
      z += "0";
    });
  return r.reverse().join(" + ");
}
