function SimpleSymbols(str) {  
  var result;
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/gi)) {
      if (str[i - 1] == "+" && str[i+1] == "+")  {
      	return true
      } else {
      return false
      }
  }}
  return result
}

SimpleSymbols(readline());           
