function dirReduc(arr){
  var depth = 4;
  while (depth > 0) {
    arr.forEach((a, b, c) => {
      if ((a == "NORTH" && c[b-1] == "SOUTH") ||
      (a == "SOUTH" && c[b-1] == "NORTH") ||
      (a == "EAST" && c[b-1] == "WEST") ||
      (a == "WEST" && c[b-1] == "EAST")) {
        arr.splice(b, 1);
        arr.splice(b-1, 1);
      }
    });
    depth--;
  }
  return arr;
}
