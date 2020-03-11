Array.prototype.square = function () {
  return this.map(e => Math.pow(e, 2));
}

Array.prototype.cube = function () {
  return this.map(e => Math.pow(e, 3));
}

Array.prototype.average = function () {
  return this.sum() / this.length;
}

Array.prototype.sum = function () {
  if (this.length > 0) {
    return this.reduce((e, i) => e+i);
  }
}

Array.prototype.even = function () {
  var r = [];
  this.forEach((e) => {
    if (e % 2 == 0) {
      r.push(e);
    }
  });
  return r;
}

Array.prototype.odd = function () {
  var r = [];
  this.forEach((e) => {
    if (Math.abs(e % 2) == 1) {
      r.push(e);
    }
  });
  return r;
}
