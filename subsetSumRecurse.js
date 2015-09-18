function ArrayAdditionI(array) {
	// sort them to get the largest
	var sorted = array.sort(function(a,b) {return a - b});
	var highest = sorted.pop()
	var counter = 0
	// recursively add the other elements to try to sum to the largest
	function recursion(target, array) {
		if (array.length == 0) {
			return target == 0
		}

		// grab the first element of the array
		var n = array[0];
		//reduce the array to everything past n
		array = array.slice(1)				
        // recursive magic
		return recursion(target, array) || recursion(target - n, array)

	}
	return recursion(highest,sorted) ? "true" : "false"
}
   

var array = [1, 3, 7, 2, 14, 6, 2, 5, 3]

console.log(subsetSum(array))