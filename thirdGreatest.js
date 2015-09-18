function ThirdGreatest(strArr) { 
  var sortedArray = strArr.sort(function(a,b) { return b.length - a.length });
  return sortedArray[2]

}

ThirdGreatest(readline());                            
