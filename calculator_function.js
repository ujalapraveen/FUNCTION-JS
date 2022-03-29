
var add=(num1,num2,symbol)=>{
    sum=num1+num2
    return sum

}
var sub=(num1,num2,symbol)=>{
    sub=num1-num2
    return sub
}
var multi=(num1,num2,symbol)=>{
    multi=num1*num2
    return multi


}
var div=(num1,num2,symbol)=>{
    div=num1/num2
    return div
}

var readlineSync=require("readline-sync")
var num1=readlineSync.questionInt("enter the num1 =")
var num2=readlineSync.questionInt("enter the num2 =")
var symbol=readlineSync.question("enter the symbol =")
if(symbol=="+"){
    console.log(add(num1,num2,symbol))
}
else if(symbol=="-"){
    console.log(sub(num1,num2,symbol))
}

else if(symbol=="*"){
    console.log(multi(num1,num2,symbol))
}
else{
    console.log(div(num1,num2,symbol))
}