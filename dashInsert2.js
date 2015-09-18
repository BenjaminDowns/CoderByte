function DashInsertII(num) { 
  var num = num.toString()
  var newString = ''	
  for (var i = 0; i < num.length; i++) {
     	if (num[i] % 2 == 0 && num[i + 1] % 2 == 0 && num[i] != 0 && num[i + 1] != 0) {
          newString += num[i]
          newString += "*"
        } else if (num[i] % 2 == 1 && num[i + 1] % 2 == 1) {
          newString += num[i]
          newString += "-"
        } else {
          newString += num[i]
        }
  }
  return newString; 
         
}

