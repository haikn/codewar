function longest(s1, s2) {
  var combinedStr = s1 + s2;
  var combinedStrArray = combinedStr.split("");
  return combinedStrArray.sort().filter(function(el,i,a) {
        return (i==a.indexOf(el));
    }).join("");
}
