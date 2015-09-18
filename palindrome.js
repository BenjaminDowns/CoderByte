function Palindrome(str) { 
  return str.split('').reverse().join('').replace(/\s/g, "") == str.replace(/\s/g, "")      
}

Palindrome(readline());           
