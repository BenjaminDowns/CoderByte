function factorialize(numArr) {
	total = 1
	for (var i = 0; i < numArr.length; i++) {
		total *= numArr[i]
	}
	console.log(total)

}

function factorial(num) {
	numArray = []
	while (num > 0) {
		numArray.push(num)
		num--
	}
	return factorialize(numArray)
}

factorial(10)