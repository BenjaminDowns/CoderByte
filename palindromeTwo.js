function PalindromeTwo(str) { 
  return str.split('').reverse().join().toLowerCase().replace(/[\W]/g, '') == str.replace(/[\W]/g, '').toLowerCase()         
}
  
PalindromeTwo(readline()); 