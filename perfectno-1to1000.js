var i=1;
while(i<=1000){
    var j=1
    var sum=0
    while(j<i){
        if(i%j==0){
            sum+=j
        }
        j++
    }
    i++

    if(sum==j){
        console.log(sum,"perfect no")
    }

    
}