var spiralize = function(size) {
	var spiral = [];
	var min = 0;
	var max = size;
	for(var i = 0; i < size; i++) {
		spiral[i] = [];
		for(var j = 0; j < size; j++) {
			spiral[i][j] = 0;
		}
	}
	while(min < max) {
		for(var i = min; i < max; i++) {
			for(var j = min; j < max; j++) {
				if(i == min || j == min || i == max-1 || j == max-1) {
					
					spiral[i][j] = 1;
					if(i == min+1 && j == min) {
						spiral[i][j] = 0;
						if(min+2 < size/2) {
							spiral[i+1][j+1] = 1;
						}
						
					}
						
				}
			}
		}
		min = min + 2;
		max = max - 2;
	}
	
	return spiral;
}
