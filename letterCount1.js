function LetterCountI(str) { 
  var words = str.split(' ');
  var results = []
  for (word in words) {
    if (words[word].match(/(.+)(?=.*?\1)/gi)) {
        results.push(words[word]);
  	}
  }
  if (results.length == 0) {
    return "-1"
  }
  return results[0];        
}

LetterCountI(readline()); 