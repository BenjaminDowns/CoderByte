function SimpleAdding(num) { 
  var numArray = []
  while (num > 0) {
    numArray.push(num)
	num--
  }
  return numArray.reduce(function(prev, next) {
    return prev + next
  });    
}

SimpleAdding(readline());                            