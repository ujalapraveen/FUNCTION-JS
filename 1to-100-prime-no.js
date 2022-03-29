//  function expression
 
 var a=function(){
    var i=1
    while(i<100){
        count=0
        var j=2
        while(j<i){
            if(i%j==0){
                count+=1
            }
            j++
        }
        if(count==0){
            console.log(i);
        }
        i++
    }
}
a();


//ARROW FUNCTION


var a=()=>{
        var i=1
        while(i<100){
            count=0
            var j=2
            while(j<i){
                if(i%j==0){
                    count+=1
                }
                j++
            }
            if(count==0){
                console.log(i);
            }
            i++
        }
    }
    a();


    // ANONYMOUS FUNCTION


    var a=function(){
    var i=1
    while(i<100){
        count=0
        var j=2
        while(j<i){
            if(i%j==0){
                count+=1
            }
            j++
        }
        if(count==0){
            console.log(i);
        }
        i++
    }
}
a();

