function squareDigits(num){
  return Number(num.toString().split("").map(n=>n*n).join(""));
}
