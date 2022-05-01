
// FInd the Largest subarray of sum  equal to k

var str='4 1 1 1 2 3 5'
var arr=str.split(" ").map(Number)

var k=5
var sum=0
var max=0
var i=0
var j=0

while(j<arr.length){
  sum=sum+arr[j]
  
  if(sum==k){
    if(j-i+1>max){
      max=j-i+1
    }
    
  }
  
  else if(sum>k){
    while(sum>k){
      sum=sum-arr[i]
      i++
    }
  }
  j++
}

console.log(max)
