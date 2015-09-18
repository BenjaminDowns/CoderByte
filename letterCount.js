function LetterCount(str) { 
	var finalArray = []
  	var strArray = str.split(' ')	
  	for (var i = 0; i < strArray.length; i++) {
      for (var j = 0; j < strArray[i].length; j++) {
        for (var k = j+1; k < strArray[i].length; k++) {
          if (strArray[i][j] == strArray[i][k]) {
             finalArray.push(strArray[i])
          }
        }
    }
  }
  
  var dictionary = {}
  finalArray.reduce(function(a,b) {
    a[b] = a[b] + 1 || 1
    return dictionary
  }, dictionary)
  
  var greatest = 0
  for (key in dictionary) {
    if (dictionary[key] > greatest) {
      greatest = key
    }
  }
  return greatest
}

LetterCount("the dog and cat")