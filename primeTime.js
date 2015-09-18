function PrimeTime(num) { 
  var prime = true
  var x = num - 1
  while (x > 1) {
    if (num % x == 0) {

      prime = false
    }
    x--
  }
  return prime
         
}

PrimeTime(8)