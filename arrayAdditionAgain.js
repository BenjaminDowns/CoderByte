function ArrayAdditionI(arr) { 
  var sorted = arr.sort(function(a,b) {return a-b})
  var highest = arr.pop()
	
  	function recurse(target, numbers, partial) {
      var next, remaining;
      var partial = partial || [];
      var current = partial.reduce(function(a,b) {return a + b}, 0);
      if (target == current) {
        return "true"
      }
      
      if (current > target) {
        return "false"
      }
      
      for (var i = 0; i < numbers.length; i++) {
      	next = numbers[0];
        remaining = numbers.slice(1);
        return recurse(target, remaining, partial.concat[next])
      }
    }

  return recurse(highest, sorted)
         
}

var myArray = [1,2,3,6]

console.log(ArrayAdditionI(myArray))