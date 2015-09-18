function ArithGeo(arr) {
  var Geometric = true
  var Arithmetic = true
  var first = arr[1] / arr[0];


  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] / arr[i] != first) {
      Geometric = false
    }
  }

  first = arr[1] - arr[0]

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != first) {
      Arithmetic = false
    }
  }



  if (Arithmetic) {
    return "Arithmetic"
  } else if (Geometric) {
    return "Geometric"
  } else {
    return -1
  }
};

ArithGeo([4, 8, 16, 32])







// 5,10,15Output = "Arithmetic"
// Input = 2,4,16,24Output = -1