// Find the First negative element in the subarray of size K



var str='12 -1 -7 8 -15 30 16 28'

var arr=str.split(" ").map(Number)

var k=3

var i=0
var j=0

var list=[]
var res=[]
while(j<arr.length){

  
  if(arr[j]<0){
   
    list.push(arr[j])
  //console.log(list)
  }
  
  if(j-i+1<k){
    j++
  }
  else if(j-i+1==k){
    
    if(list.length===0){
      res.push(0)
   //console.log(0)
    }
    
    
    else{
      res.push(list[0])
      //console.log(list[0])
    }
    
    if(arr[i]===list[0]){
      list.shift()
      i++
      j++
    }
    
    else{
      i++
      j++
    }
    
  }
}
console.log(res)