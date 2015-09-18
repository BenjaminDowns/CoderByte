function starPrinter(num) {
	for (i = 0; i <= num; i++) {
		s = ""
		for (j = 0; j < i; j++) {
			s += "*"
		}
		console.log(s)
	}	
}

starPrinter(5)