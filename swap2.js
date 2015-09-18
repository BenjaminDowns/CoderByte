function SwapII(str) { 
  var newString = ''
  for (var i = 0; i < str.length; i++) {
    	if (str[i] != (str[i] * 1) && str[i] == str[i].toUpperCase()) {
        	newString += str[i].toLowerCase()
        } else if (str[i] != (str[i] * 1) && str[i] == str[i].toLowerCase()) {
        	newString += str[i].toUpperCase()
        } else if (parseInt(str[i])) {
			return str[i] + " is a number ."
        }
    }
  
  return newString; 
         
}