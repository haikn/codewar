function removeNb (n) {
  var sum = n*(n+1)/2;
  var result = [];
	for(var i = 1; i <= n; i++) {
		a = (sum - i)/(1 + i);
		if(a == Math.floor(a) && a < n) {
			result.push([i,a]);
		}
	}
  return result;
}
