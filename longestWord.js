function LongestWord(sen) { 
	var longest = ''	
  var senArray = sen.split(' ')
	for (word in senArray) {
      if (senArray[word].match(/^[a-z]+$/)) {
	      if (senArray[word].length > longest.length) {
    	    longest = senArray[word]
        	}
		}		
    }
  return longest
         
}

LongestWord(readline());   