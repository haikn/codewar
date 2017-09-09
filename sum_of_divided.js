function sumOfDivided(lst) {
	var t = {};
	lst.forEach(function(a) {
		var b = Math.abs(a);
		var r = [];
		for(var j = 2; j <= b; j++) {
			while(b % j == 0) {
				if (r.indexOf(j) === -1)  r.push(j);
				b = b / j;
			}
		}
		r.forEach(function(b) {
			if(typeof t[b] == 'undefined')
				t[b] = a;
			else 
				t[b] = t[b] + a;
		});
	});
	return Object.keys(t).map(function(key) {
		return [Number(key), t[key]];
	});
}
