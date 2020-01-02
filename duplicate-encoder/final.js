function duplicateEncode(word){
  word = word.toLowerCase();
  var chars = word.split("");
  var pasts = [];
  var endlist = {};
  var result = "";
  
  for (var x=0;x < chars.length;x++) {
    if (pasts.includes(chars[x])) {
      endlist[chars[x]] = ")";
    } else {
      endlist[chars[x]] = "(";
      pasts.push(chars[x]);
    }
  }
  for (var x=0;x < chars.length;x++) {
    result += endlist[word[x]];
  }
  
  return result;
}
