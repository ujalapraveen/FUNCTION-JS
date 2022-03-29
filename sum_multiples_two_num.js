

function add(){
    var readlineSync=require("readline-sync")
    var n=readlineSync.questionInt("enter a no =")
    var b=readlineSync.questionInt(" enter a number b")
    if(n<0|| b<0){
        return "Invalid Number"
    }
    var i=1;
    var d=n
    var sum=0
    while(i<=b){
        if(i%n==0){
            console.log(i)
            sum+=i
        }
        i++
    }
    return sum
}

console.log(add())