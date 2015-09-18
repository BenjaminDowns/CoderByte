function recurse(array) {
	var sortedArray = array.sort(function(a,b) {return a-b })
	var target = sortedArray.pop()
	var i = 0

	function search(target, numsArray) {
		if (target === sum) {
			console.log("Yes")
			return
		} else if (sum > target) {
			return null
		} else {
			return search(target, sum + numsArray[i]) || search(target, sum + numsArray[i + 1])
		}

	}
	search(target, sortedArray)

}

recurse([1,2,6,4,3])