function digital_root(n) {
  function addition(num) {
    return num.reduce(function(a,b) {return parseInt(a) + parseInt(b);});
  }
  while(n.toString().length > 1) {
    n = n.toString().split("");
    n = addition(n);
  }
  return n;
}
