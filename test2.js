

// Find the maximum sum of subarray of size k

var str='2 5 1 8 2 9 2'
var k=3

var max=-10000
var sum=0
var i=0
var j=0
var arr=str.split(" ").map(Number)

while(j<arr.length){
    sum=sum+arr[j]
    if(j-i+1<k){
        j++
    }
    else if(j-i+1==k){
        if(sum>max){
            max=sum
        }
        sum=sum-arr[i]
        i++
        j++
    }
}

console.log(max)