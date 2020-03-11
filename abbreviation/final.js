function abbreviate(string) {
  var i = string.split(/([^a-z])/i);
  var a = [];
  for (var x=0;x < i.length;x++) {
    if (/[a-z]/i.test(i[x]) && i[x].length > 3) {
      var f = i[x][0];
      var l = i[x][i[x].length-1];
      var n = i[x].length-2;
      a.push(f + n.toString() + l);
    } else {
      a.push(i[x]);
    }
  }
  return a.join("");
}
