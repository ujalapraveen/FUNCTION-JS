var fun=()=>{
    var i=1;
    c=[]
    while(i<10){
        c.push(i)
        i++

    }
    return c
}


var x=fun()
console.log(x)

var oddeven=()=>{
    var j=0
    while(j<x.length){
        if(x[j]%2==0){
            console.log(x[j],"even")
        }
        else{
            console.log(x[j],"odd")
        }
        j++
    }



}

oddeven()
   
