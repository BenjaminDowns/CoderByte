function CaesarCipher(str,num) { 
  var newChar
  var newString = ''
  for (var i = 0; i < str.length; i++) {
    if (!str[i].match(/[a-z]/)) {
    	newString += str[i]
    } else {
    newChar = (str.charCodeAt(i)) + num
    newString += String.fromCharCode(newChar)
	}  
  }
  return newString      
}

CaesarCipher("This", 2)