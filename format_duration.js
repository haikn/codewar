function formatDuration (seconds) {
  if(seconds == 0) return 'now';
	var r = [];                                                                // result
	var s = {                                                                  // structure
	    year: 31536000,
	    day: 86400,
	    hour: 3600,
	    minute: 60,
	    second: 1
	};

	Object.keys(s).forEach(function(key){
		value = Math.floor(seconds / s[key]);
		if(value > 0) {
			r.push(value.toString().concat(' ',(value>1)?key+'s':key));
		}
	     
	    seconds -= value * s[key];
	});
	return [r.slice(0, -1).join(', '), r.slice(-1)[0]].join(r.length < 2 ? '' : ' and ');
}
