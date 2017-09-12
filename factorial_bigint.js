function factorial(n) {
	if(!Number.isInteger(n) || n < 0)
		return null;
	if(n == 0)
		return "1";
	
	let ca = 0;
	let res = [1];
	let k = 0;
	  
	for (let i = 1; i <= n; i++) {
		let j = 0;
		while(j <= k) {
			let al = res[j] * i + ca;
			res[j] = al % 10;
			ca = Math.floor(al / 10);
			j++;
		}
		while (ca) {
			k++;
			res[k] = ca % 10;
			ca = Math.floor(ca / 10);
		}
	}
	return res.reverse().join("");
}
