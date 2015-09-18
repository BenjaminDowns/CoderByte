function NumberSearch(str) { 
  var nums = str.match(/\d/g)
  var length = str.match(/[a-z]/gi).length
  
  var total = nums.reduce(function(a,b) {
    return parseInt(a) + parseInt(b)
  });

  return Math.round(total/length)
         
}