function evalu (e, n) {
  if (e === undefined) return n;
  
  return Math.floor(eval(n + e[1] + e[0]));
}

function zero(i) {
  return evalu(i, 0);
}
function one(i) {
  return evalu(i, 1);
}
function two(i) {
  return evalu(i, 2);
}
function three(i) {
  return evalu(i, 3);
}
function four(i) {
  return evalu(i, 4);
}
function five(i) {
  return evalu(i, 5);
}
function six(i) {
  return evalu(i, 6);
}
function seven(i) {
  return evalu(i, 7);
}
function eight(i) {
  return evalu(i, 8);
}
function nine(i) {
  return evalu(i, 9);
}

function plus(i) {
  return [i, "+"];
}
function minus(i) {
  return [i, "-"];
}
function times(i) {
  return [i, "*"];

}
function dividedBy(i) {
  return [i, "/"];
}
