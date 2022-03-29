// function add(a,b){
//     return a+b
// }

// var c=add(3,4)
// console.log(c)




// var month=["jan","march","April","Jumw,","July"]
// var updatemonth=month.splice(1,1,"March")
// console.log(month)





// var list=[2,3,4,6,7,9]
// var i=0;
// var b=[]
// while(i<list.length){
//     a=[]
//     if(list.includes(list[i])){
//         a.push(list[i])
//         a.push(list[i+1])
    

//     }

//     b.push(a)
    
//     i=i+2


// }
// console.log(b)


function add_numbers(num1,num2){
    console.log(num1+num2);
    console.log("------------");
 }
  
 function add_numbers_list(list1,list2){
    for(var i=0;i<3;i++){
        add_numbers(list1[i],list2[i]);
    }
 }
  
 add_numbers_list([50, 60, 10],[10, 20, 13])
 Visualize
 