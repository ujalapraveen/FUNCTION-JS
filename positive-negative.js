var array=[2,1,3,-1,-9,8,1,4,-8,-9]
var i=0;
var sum=0;
var count=0
while(i<array.length){
    if(array[i]>0){
        sum+=array[i]

    }
    else if(array[i]<0){
        count+=1
    }
    i++

    
}
console.log(sum)
console.log(count)