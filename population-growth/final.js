function nbYear(p0, percent, aug, p) {
    var n = percent / 100;
    var y = 0;
    var c = p0;
    while (true) {
      y++;
      c = c + (c * n + aug)
      if (c >= p) {
        return y;
      }
    }
}
