function TimeConvert(num) { 
  var minutes = num;
  var hours = Math.floor(minutes/60);
  var result = []
  if (hours) {
    result.push(hours)
    result.push(minutes % 60)
  } else {
    return "0:" + minutes
  }
  return result.join(":"); 
         
}

TimeConvert(readline());  