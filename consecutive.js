function Consecutive(arr) { 
	var counter = 0
  	arr.sort(function(a,b) {return a-b})
    for (var i = 0; i < arr.length -1; i = i+2) {
        counter += (arr[i + 1] - arr[i]) - 1
    }
    return counter
    
}

console.log(Consecutive([1, 4, 5, 8]))
