function duplicateCount(text){
  var r = text.toLowerCase().split('');
  var f = [];
  var c = [];
  for (var x=0;x < r.length;x++) {
    if (!f.includes(r[x])) {
      f.push(r[x]);
    } else {
      if (!c.includes(r[x])) {
        c.push(r[x]);
      }
    }
  }
  return c.length;
}
