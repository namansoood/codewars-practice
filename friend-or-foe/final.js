function friend(friends){
  var res = [];
  friends.forEach((a) => {
    return a.length == 4 ? res.push(a) : null;
  });
  return res;
}
