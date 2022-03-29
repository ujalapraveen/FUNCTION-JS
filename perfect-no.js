// var perfect=(num)=>{
//     var i=0;
//     sum=0;
//     while(i<num){
//         if(num%i==0){
//             sum+=i
//         }
//         i++
//     }
//     if(num==sum){
//         console.log(num,"perfect no");
//     }
//     else{
//         console.log(num,"not perfect no")
//     }


// }
// var readlineSync=require("readline-sync")
// var num=readlineSync.questionInt("enter a number")
// perfect(num)




       
    
          
var i=1;
while(i<100){
    var j=1
    var sum=0
    while(j<i){
        if(j%i==0){
            sum+=j
        }
        j++
    }
    i++

    if(sum==i){
        console.log(i,"perfect no")
    }

    
}