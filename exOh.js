function ExOh(str) { 
  if (str.match(/x/ig) && str.match(/o/ig)) {
    return str.match(/x/ig).length == str.match(/o/ig).length
  } else {
    return false
  }
}

ExOh(readline());           
