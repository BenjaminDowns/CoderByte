function CountingMinutesI(arr) {
	arr.replace(/12/g, '0')
	var Times = arr.split('-')
	
	var firstTime = Times[0].split(':')
	var firstHours = parseInt(firstTime[0].replace('12', '0'))
	var firstMinutes = firstTime[1]
	var firstTotal = 0
	
	var secondTime = Times[1].split(':')
	var secondHours = parseInt(secondTime[0].replace('12', '0'))
	var secondMinutes = secondTime[1]
	var secondTotal = 0

	if (firstMinutes.match(/pm/)) {
		firstHours += 12
	}
	
	firstMinutes = firstMinutes.replace(/\wm/, '')
	firstTotal = (firstHours * 60) + parseInt(firstMinutes)

	if (secondMinutes.match(/pm/)) {
		secondHours += 12
	}
	
	secondMinutes = secondMinutes.replace(/\wm/, '')
	secondTotal = (secondHours * 60) + parseInt(secondMinutes)
	
	return secondTotal < firstTotal ? secondTotal + (24 * 60) - firstTotal : secondTotal - firstTotal

}


console.log(CountingMinutesI('12:30pm-12:00am'))