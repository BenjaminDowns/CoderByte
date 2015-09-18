function LetterChanges(str) {
  var newString = ''
  for (i in str) {
    if (str[i].match(/\w/i)) {
      newString += str[i].replace(str[i], String.fromCharCode(str.charCodeAt(i) + 1))

    } else {
      newString += str[i]
    }
  }
  return newString.replace(/a/g, "A").replace(/e/g, "E").replace(/i/g, "I").replace(/o/g, "O").replace(/u/g, "U")

}

LetterChanges(readline());