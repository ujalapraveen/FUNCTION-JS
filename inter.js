// var i=0;
// var sum=0;
// while(i<=100){
//     if(i%3 && i%5){
//         sum+=i
//     }
//     else if(i%3||i%5){
//         sum+=i
//     }
//     else{

//     }
//     i++
// }
// console.log(sum);



// var readlineSync= require("readline-sync")
// var number=readlineSync.questionInt("enter a no")
// var i=1;
// var count=0;

// while(i<=number){
//     if(number%i==0){
//         count+=1
//     }
//     i++

// }
    

// if(count==2){
//     console.log("prime no");
// }
// else{
//     console.log("not prime no")
//  }
// if(count%2==0){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }





//  function add_numbers_list(list1,list2){
//     for(var i=0;i<3;i++){
//         add_numbers(list1[i],list2[i]);
//     }
//  }
  
// (add_numbers_list([50, 60, 10],[10, 20, 13]))


var checknumberlist=(a,b)=>{
    var i=0;
    while(i<a.length){
        if(a[i]%2==0 && b[i]%2==0){
            console.log( "both are even")
        }
        else{
            console.log(" both are odd")
        }
        i++
    }
}



(checknumberlist([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87]))





 