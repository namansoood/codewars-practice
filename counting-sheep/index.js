function countSheeps(arrayOfSheep) {
  var i = 0;
  for (var x=0;x < arrayOfSheep.length;x++) {
    if (arrayOfSheep[x]) {
      i++;
    }
  }
  return i;
}
