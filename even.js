function getEvenNumbers(numbersArray){
    var i=0;
    b=[]
    while(i<numbersArray.length){
        if(numbersArray[i]%2==0){
            b.push(numbersArray[i])
    
        }
        i++
       
    }
    return b
}


console.log(getEvenNumbers([2,4,5,6]))














// var a=[ [ 1, 2, 3, 14, 5 ], [ 5, 6, 7, 18, 9 ], [ 20, 21, 34, 56, 100 ]]
// var i=0
// while(i<a.length){
//     var j=0
//     var minimum=0
//     var max=0
//     while(j<a[i].length){
//         if(a[i][j]>max){
//             minimum=max
//             max=a[i][j]
//         }
//         else if(minimum<a[i][j] && a[i][j]<max){
//             minimum=a[i]
//         }
//         j++
//     }
//     i++
// }
// console.log(minimum)





