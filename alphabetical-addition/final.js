function addLetters(...letters) {
  if (letters.length == 0) { /*handle when no letter is provided*/
    return getLetterIndex(26);
  }
  var result = 0;
  for (var x=0;x < letters.length;x++) {
    result += getLetterIndex(letters[x]);
  }
  return getLetterIndex(handleOverflow(result, 26));
}
function handleOverflow (value, max) {
  var result = value;
  for (var x=0;x < result;x++) {
    if (x >= max) {
      result -= max;
      x = 0;
    }
  }
  return Math.min(result, max);
}
function getLetterIndex (l) {
/*
  * getLetterIndex() can work both ways.
  * (l::string) To get index of a letter from list of alphabet.
  * (l::number) To get letter from list of alphabet.
*/
  var a = "abcdefghijklmnopqrstuvwxyz".split('');
  if (typeof(l) == "string") {  /*get index*/
    for (var x=0;x < a.length;x++) {
      if (a[x] === l) {
        return x+1;
      }
    }
   }
  if (typeof(l) == "number") {  /*get alphabet*/
    for (var x=0;x < a.length;x++) {
      if ((x+1) === l) {
        return a[x];
      }
    }
   }
}
