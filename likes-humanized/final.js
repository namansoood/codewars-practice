function likes(m) {
  var a = "like this";
  var b = "no one likes this";
  
  
  if (m.length == 0) {
    return b;
  }
  if (m.length == 1) {
    return m[0] + " likes this";
  }
  if (m.length == 2) {
    return m[0] + " and " + m[1] + " " + a;
  }
  if (m.length == 3) {
    return m[0] + ", " + m[1] + " and " + m[2] + " " + a;
  }
  if (m.length >= 4) {
    return m[0] + ", " + m[1] + " and " + (m.length - 2) + " others " + a;
  }
}
