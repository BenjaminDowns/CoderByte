// function OffLineMinimum(strArr) { 
//     var tempArray = []
//   	var finalArray = []
//     for (var i = 0; i < strArr.length; i++) {
//     if (parseInt(strArr[i])) {
//         tempArray.push(strArr[i])
//       } else if (strArr[i] == "E") {
//         var winner = Math.min.apply(null, tempArray)
//         finalArray.push(winner)
// 		    tempArray.splice(tempArray.indexOf(winner), 1)
//       }  
//     }
// 	return finalArray
// }

function OffLineMinimum(strArr) { 
    var tempArray = []
    var finalArray = []
    for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] != "E") {
        tempArray.push(parseInt(strArr[i]))
      } else {
        var winner = Math.min.apply(null, tempArray);
        finalArray.push(winner)
        tempArray.splice(tempArray.indexOf(winner), 1)
      }  
    }
  console.log(finalArray)
}


OffLineMinimum(["4","E","1","E","2","E","3","E"])
OffLineMinimum(["1","2","E","E","3"])
OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])
OffLineMinimum(["1","2","3","E"])


// function OffLineMinimum(strArr) { 
//     var tempArray = []
//     var finalArray = []
//     for (var i = 0; i < strArr.length; i++) {
//     if (parseInt(strArr[i])) {
//         tempArray.push(strArr[i])
//       } else if (strArr[i] == "E") {
//         tempArray.sort(function(a,b) {return b-a})
//         finalArray.push(tempArray.shift())
//       }  
//     }
//   return finalArray
// }