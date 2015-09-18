function ABCheck(str) { 
  return str.match(/a...b/gi) != null
}

ABCheck(readline());  