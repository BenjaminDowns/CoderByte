function LetterCapitalize(str) { 
  var splitString = str.split(' ')
  var newString = ""
  for (var i = 0; i <splitString.length; i++) {
    newString += splitString[i].replace(splitString[i][0], splitString[i][0].toUpperCase())
	newString += " "
  }
  return newString
         
}

LetterCapitalize(readline());           
