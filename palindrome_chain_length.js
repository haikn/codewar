var palindromeChainLength = function(n) {
  var step = 0;
  var temp = n;
  while(temp != temp.toString().split("").reverse().join("")) {
    temp = temp + +temp.toString().split("").reverse().join("");
    
    step = step + 1;
  }
  
  return step;
};
