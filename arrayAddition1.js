function ArrayAddition1(arr) { 
	var nums = arr.sort(function(a,b) {return a-b})
  var max = nums.pop()
	var i = 0
  console.log(nums)

    function checkAll(max) {
      console.log("Max is: " + max)
      function find(sum) {
        if (sum == max) {
          console.log("found")
          return true
        } else if (sum > max) {
          console.log("too far!")
          return null
        } else {
          console.log("sum is now" + sum)
          return find(sum += nums[i + 1]) || find(sum += nums[i + 1])
        }
      }
      find(nums[i])
    } 
    checkAll(max)  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
// ArrayAdditionI(readline()); 

ArrayAddition1([3,5,-1,8,12])