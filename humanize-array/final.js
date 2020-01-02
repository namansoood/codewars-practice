function humanize(names){
  if (names.length > 1) {
    return names.reduce((a, b, c, d) => {
      return (typeof(a) == "object" ? a.name : a) + (c == (d.length - 1) ? " & " : ", ") + b.name;
    });
  } else {
    return names.length == 1 ? names[0].name : "";
  }
}
