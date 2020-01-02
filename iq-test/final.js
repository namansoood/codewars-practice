function iqTest(numbers){
  var n = numbers.split(" ");
  var sep = [[],[]];
  
  // Loop through numbers and separate them in category: evens and odds.
  for (var x=0;x < n.length;x++) {
    if (n[x] % 2 == 0) {
      sep[0].push(n[x]); //Even numbers
    } else {
      sep[1].push(n[x]); //Odd numbers
    }
  }
  //Finding the index of smallest array
  var a = sep.reduce((idx, arr) => arr.length < sep[idx].length ? idx + 1 : idx, 0);
  
  //Get index of first item in smallest array 'a'
  return n.indexOf(sep[a][0]) + 1;
}
