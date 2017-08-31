function productFib(prod){
  // ...
  var fibArr = new Array();
  fibArr[0] = 0;
  fibArr[1] = 1;
  var i = 2;
  while(parseInt(fibArr[i-2])*parseInt(fibArr[i-1]) < prod) {
    fibArr[i] = parseInt(fibArr[i-2])+parseInt(fibArr[i-1]);
    i++;
  }
  return [fibArr[i-2], fibArr[i-1], parseInt(fibArr[i-2])*parseInt(fibArr[i-1]) == prod];
}
