var palindromeChainLength = function(n) {
  var r = 1 * n.toString().split('').reverse().join('');
  return n - r && 1 + palindromeChainLength(r + n);
};
