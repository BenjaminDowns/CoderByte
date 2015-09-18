// function shuffle(array) {
// 	for (var i = 0; i < array.length; i++) {
// 		eachPermute.push(arr.shift())
// 	};
// }


// shift - remove from front 		pop - remove from end ----> returns the element
// unshift - add to front			push - add to end ----> returns the new length


var input = 12345
var bookmark = input
var counter = 0
var allPermutes = []

function permute(num) {
  // change the num to an array
  var original = num.toString().split('');
  //make a new array to store each permutation
  var eachPermute = []
  // add the first element of the num to the eachPermute
  eachPermute.push(original.shift())  
  for (var i = original.length; i > -1; i--) {
    if (typeof original[i] != "undefined") {
      // add from the end of the original, to the front of the new one
      eachPermute.unshift(original[i])
    }
  }
  // add the first permutation to our allPermutes
  allPermutes.push(eachPermute.join(''))
  // base case
  if (counter >= original.length) {
  	return allPermutes
  // recurse
  } else {
  	counter ++
  	permute(allPermutes[allPermutes.length-1])
  }
}

permute(input)

var sorted = permute(input).sort(function(a,b) {return a-b});
console.log(sorted)
console.log(bookmark)
console.log(sorted.indexOf(input))
var answer = sorted[sorted.indexOf(input) + 2]
console.log(answer)



